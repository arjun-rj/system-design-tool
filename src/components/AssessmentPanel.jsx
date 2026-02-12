import React, { useState } from 'react';
import { roles, experienceLevels, questions } from './assessmentData';

function AssessmentPanel({ nodes, onClose }) {
  const [step, setStep] = useState('setup'); // setup, quiz, results
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedExp, setSelectedExp] = useState('');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [scenarioAnswers, setScenarioAnswers] = useState({});

  const getQuestions = () => {
    if (!selectedRole || !selectedExp) return [];
    const roleQs = questions[selectedRole];
    if (!roleQs) return [];
    return roleQs[selectedExp] || [];
  };

  const startAssessment = () => {
    if (!selectedRole || !selectedExp) return;
    const qs = getQuestions();
    if (qs.length === 0) {
      alert('No questions available for this combination yet.');
      return;
    }
    setCurrentQ(0);
    setAnswers({});
    setScenarioAnswers({});
    setStep('quiz');
  };

  const handleMCQAnswer = (qId, optionIdx) => {
    setAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleScenarioAnswer = (qId, text) => {
    setScenarioAnswers((prev) => ({ ...prev, [qId]: text }));
  };

  const handleDesignSubmit = (qId) => {
    // Check if user has placed components on canvas
    const componentCount = nodes.length;
    const connectionCount = componentCount > 1 ? 'has connections' : 'no connections';
    setAnswers((prev) => ({ ...prev, [qId]: { components: componentCount, note: connectionCount } }));
  };

  const nextQuestion = () => {
    const qs = getQuestions();
    if (currentQ < qs.length - 1) setCurrentQ(currentQ + 1);
    else setStep('results');
  };

  const prevQuestion = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const calculateScore = () => {
    const qs = getQuestions();
    let total = 0;
    let earned = 0;
    qs.forEach((q) => {
      total += q.points;
      if (q.type === 'mcq' && answers[q.id] === q.answer) {
        earned += q.points;
      } else if (q.type === 'design' && answers[q.id]) {
        const placed = answers[q.id].components || 0;
        const expected = (q.expectedComponents || []).length;
        const ratio = expected > 0 ? Math.min(placed / expected, 1) : 0;
        earned += Math.round(q.points * ratio);
      } else if (q.type === 'scenario' && scenarioAnswers[q.id] && scenarioAnswers[q.id].length > 50) {
        earned += Math.round(q.points * 0.7); // partial credit for written answers
      }
    });
    return { earned, total, percentage: total > 0 ? Math.round((earned / total) * 100) : 0 };
  };

  const getGrade = (pct) => {
    if (pct >= 90) return { grade: 'A+', label: 'Exceptional', color: '#4CAF50' };
    if (pct >= 80) return { grade: 'A', label: 'Strong Hire', color: '#8BC34A' };
    if (pct >= 70) return { grade: 'B+', label: 'Hire', color: '#CDDC39' };
    if (pct >= 60) return { grade: 'B', label: 'Lean Hire', color: '#FFC107' };
    if (pct >= 50) return { grade: 'C', label: 'Borderline', color: '#FF9800' };
    return { grade: 'D', label: 'No Hire', color: '#f44336' };
  };

  if (step === 'setup') {
    return (
      <div className="assessment-overlay">
        <div className="assessment-modal">
          <div className="assessment-header">
            <h2>🎯 Technical Assessment</h2>
            <button className="close-btn" onClick={onClose}>✕</button>
          </div>
          <div className="assessment-setup">
            <p className="setup-desc">Select a role and experience level to generate a tailored assessment. Design questions require building the architecture on the canvas.</p>
            <div className="setup-field">
              <label>Role</label>
              <div className="role-grid">
                {roles.map((r) => (
                  <button key={r.id} className={`role-btn ${selectedRole === r.id ? 'selected' : ''}`} onClick={() => setSelectedRole(r.id)}>
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="setup-field">
              <label>Experience Level</label>
              <div className="exp-grid">
                {experienceLevels.map((e) => (
                  <button key={e.id} className={`exp-btn ${selectedExp === e.id ? 'selected' : ''}`} onClick={() => setSelectedExp(e.id)}>
                    {e.label}
                  </button>
                ))}
              </div>
            </div>
            <button className="start-btn" onClick={startAssessment} disabled={!selectedRole || !selectedExp}>
              🚀 Start Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'results') {
    const score = calculateScore();
    const gradeInfo = getGrade(score.percentage);
    const qs = getQuestions();
    const roleName = roles.find((r) => r.id === selectedRole)?.label;
    const expName = experienceLevels.find((e) => e.id === selectedExp)?.label;

    return (
      <div className="assessment-overlay">
        <div className="assessment-modal results-modal">
          <div className="assessment-header">
            <h2>📊 Assessment Results</h2>
            <button className="close-btn" onClick={onClose}>✕</button>
          </div>
          <div className="results-body">
            <div className="results-summary">
              <div className="score-circle" style={{ borderColor: gradeInfo.color }}>
                <span className="score-grade" style={{ color: gradeInfo.color }}>{gradeInfo.grade}</span>
                <span className="score-pct">{score.percentage}%</span>
              </div>
              <div className="score-details">
                <p className="score-label" style={{ color: gradeInfo.color }}>{gradeInfo.label}</p>
                <p className="score-meta">{roleName} • {expName}</p>
                <p className="score-points">{score.earned} / {score.total} points</p>
              </div>
            </div>
            <div className="results-breakdown">
              <h3>Question Breakdown</h3>
              {qs.map((q, idx) => {
                let status = '⬜';
                if (q.type === 'mcq') status = answers[q.id] === q.answer ? '✅' : '❌';
                else if (q.type === 'design') status = answers[q.id] ? '🔶' : '⬜';
                else if (q.type === 'scenario') status = scenarioAnswers[q.id] ? '🔶' : '⬜';
                return (
                  <div key={q.id} className="result-item">
                    <span className="result-status">{status}</span>
                    <span className="result-q">Q{idx + 1}: {q.question.slice(0, 80)}...</span>
                    <span className="result-type">{q.type}</span>
                    <span className="result-pts">{q.points}pts</span>
                  </div>
                );
              })}
            </div>
            <div className="results-actions">
              <button className="retry-btn" onClick={() => { setStep('setup'); setAnswers({}); setScenarioAnswers({}); }}>🔄 New Assessment</button>
              <button className="close-modal-btn" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz step
  const qs = getQuestions();
  const q = qs[currentQ];
  if (!q) return null;

  return (
    <div className="assessment-bar">
      <div className="assessment-bar-header">
        <span className="q-counter">Q{currentQ + 1}/{qs.length}</span>
        <span className="q-type-badge">{q.type === 'mcq' ? '📝 MCQ' : q.type === 'design' ? '🏗️ Design' : '📋 Scenario'}</span>
        <span className="q-points">{q.points} pts</span>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      <div className="assessment-bar-body">
        <p className="q-text">{q.question}</p>
        {q.hint && <p className="q-hint">💡 Hint: {q.hint}</p>}

        {q.type === 'mcq' && (
          <div className="mcq-options">
            {q.options.map((opt, idx) => (
              <button key={idx} className={`mcq-option ${answers[q.id] === idx ? 'selected' : ''}`} onClick={() => handleMCQAnswer(q.id, idx)}>
                <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
                {opt}
              </button>
            ))}
          </div>
        )}

        {q.type === 'design' && (
          <div className="design-prompt">
            <p className="design-instruction">👆 Build the architecture on the canvas above, then click submit.</p>
            {q.expectedComponents && (
              <p className="expected-hint">Expected components: {q.expectedComponents.length}+ nodes</p>
            )}
            <button className={`submit-design-btn ${answers[q.id] ? 'submitted' : ''}`} onClick={() => handleDesignSubmit(q.id)}>
              {answers[q.id] ? `✅ Submitted (${answers[q.id].components} components)` : '📐 Submit Design'}
            </button>
          </div>
        )}

        {q.type === 'scenario' && (
          <textarea className="scenario-input" placeholder="Write your answer here..." value={scenarioAnswers[q.id] || ''} onChange={(e) => handleScenarioAnswer(q.id, e.target.value)} rows={5} />
        )}
      </div>
      <div className="assessment-bar-footer">
        <button className="nav-btn" onClick={prevQuestion} disabled={currentQ === 0}>← Previous</button>
        <button className="nav-btn next" onClick={nextQuestion}>
          {currentQ === qs.length - 1 ? '📊 Finish & Score' : 'Next →'}
        </button>
      </div>
    </div>
  );
}

export default AssessmentPanel;
