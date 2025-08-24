import React, { useState, useCallback } from 'react';

const buttons = [
  ['C', '±', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '−'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']
];

function formatNumber(value) {
  if (value === null || value === undefined) return '0';
  const str = String(value);
  if (/e/i.test(str)) return str;
  const [int, dec] = str.split('.');
  const intWithSep = int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return dec !== undefined ? `${intWithSep}.${dec}` : intWithSep;
}

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [accumulator, setAccumulator] = useState(null);
  const [operator, setOperator] = useState(null);
  const [overwrite, setOverwrite] = useState(true);

  const inputDigit = useCallback((digit) => {
    setDisplay((prev) => {
      if (overwrite) {
        setOverwrite(false);
        return digit === '.' ? '0.' : digit;
      }
      if (digit === '.' && prev.includes('.')) return prev;
      if (prev === '0' && digit !== '.') return digit;
      return prev + digit;
    });
  }, [overwrite]);

  const clearAll = useCallback(() => {
    setDisplay('0');
    setAccumulator(null);
    setOperator(null);
    setOverwrite(true);
  }, []);

  const toggleSign = useCallback(() => {
    setDisplay((prev) => (prev.startsWith('-') ? prev.slice(1) : prev === '0' ? prev : '-' + prev));
  }, []);

  const percent = useCallback(() => {
    setDisplay((prev) => String(parseFloat(prev || '0') / 100));
    setOverwrite(true);
  }, []);

  const doCompute = useCallback((a, b, op) => {
    const x = parseFloat(a);
    const y = parseFloat(b);
    if (op === '+') return x + y;
    if (op === '−' || op === '-') return x - y;
    if (op === '×' || op === '*') return x * y;
    if (op === '÷' || op === '/') return y === 0 ? NaN : x / y;
    return y;
  }, []);

  const chooseOperator = useCallback((op) => {
    if (operator && !overwrite) {
      const next = doCompute(accumulator ?? display, display, operator);
      setAccumulator(String(next));
      setDisplay(String(next));
    } else {
      setAccumulator(display);
    }
    setOperator(op);
    setOverwrite(true);
  }, [accumulator, display, doCompute, operator, overwrite]);

  const equals = useCallback(() => {
    if (operator == null || accumulator == null) return;
    const result = doCompute(accumulator, display, operator);
    setDisplay(String(result));
    setAccumulator(null);
    setOperator(null);
    setOverwrite(true);
  }, [accumulator, display, doCompute, operator]);

  const handleButton = useCallback((val) => {
    if (/^\d$/.test(val)) return inputDigit(val);
    if (val === '.') return inputDigit(val);
    if (val === 'C') return clearAll();
    if (val === '±') return toggleSign();
    if (val === '%') return percent();
    if (val === '=') return equals();
    if (['+', '−', '×', '÷'].includes(val)) return chooseOperator(val);
  }, [chooseOperator, clearAll, equals, inputDigit, percent, toggleSign]);

  const onKeyDown = useCallback((e) => {
    const key = e.key;
    if (/^\d$/.test(key)) return inputDigit(key);
    if (key === '.') return inputDigit('.');
    if (key === 'Enter' || key === '=') return equals();
    if (key === 'Escape') return clearAll();
    if (key === 'Backspace') {
      setDisplay((prev) => (overwrite ? '0' : prev.length > 1 ? prev.slice(0, -1) : '0'));
      return;
    }
    if (key === '+') return chooseOperator('+');
    if (key === '-') return chooseOperator('−');
    if (key === '*') return chooseOperator('×');
    if (key === '/') return chooseOperator('÷');
    if (key === '%') return percent();
  }, [chooseOperator, clearAll, equals, inputDigit, overwrite, percent]);

  return (
    <div className="calc-wrapper" onKeyDown={onKeyDown} tabIndex={0} style={{ outline: 'none', maxWidth: 360, margin: '40px auto' }}>
      <div className="calc-display" style={{ background: '#111', color: '#0f0', padding: '24px', textAlign: 'right', fontSize: 32, borderRadius: 8 }}>
        {formatNumber(display)}
      </div>
      <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginTop: 12 }}>
        {buttons.flat().map((b, idx) => (
          <button
            key={idx}
            onClick={() => handleButton(b)}
            style={{ padding: '16px', fontSize: 20, borderRadius: 8, gridColumn: b === '0' ? 'span 2' : 'auto' }}
            className={/^[0-9]$/.test(b) ? 'btn btn-secondary' : b === '=' ? 'btn btn-success' : 'btn btn-dark'}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}