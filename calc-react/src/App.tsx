import { useState } from 'react'
import './App.css'


type Operator = '+' | '-' | '×' | '÷'

function calculate(a: number, b: number, op: Operator): number {
	if (op === '+') return a + b
	if (op === '-') return a - b
	if (op === '×') return a * b
	if (op === '÷') return b === 0 ? NaN : a / b
	return NaN
}

function formatNumber(value: number): string {
	const rounded = Math.round(value * 1e12) / 1e12
	return (Number.isFinite(rounded) ? rounded : 'Error').toString()
}

function App() {
	const [display, setDisplay] = useState<string>('0')
	const [previousValue, setPreviousValue] = useState<number | null>(null)
	const [operator, setOperator] = useState<Operator | null>(null)
	const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false)

	function inputDigit(digit: string) {
		if (waitingForOperand) {
			setDisplay(digit)
			setWaitingForOperand(false)
			return
		}
		setDisplay((prev) => (prev === '0' ? digit : prev + digit))
	}

	function inputDot() {
		if (waitingForOperand) {
			setDisplay('0.')
			setWaitingForOperand(false)
			return
		}
		setDisplay((prev) => (prev.includes('.') ? prev : prev + '.'))
	}

	function clearAll() {
		setDisplay('0')
		setPreviousValue(null)
		setOperator(null)
		setWaitingForOperand(false)
	}

	function backspace() {
		setDisplay((prev) => (waitingForOperand ? prev : prev.length > 1 ? prev.slice(0, -1) : '0'))
	}

	function toggleSign() {
		setDisplay((prev) => (prev.startsWith('-') ? prev.slice(1) : prev === '0' ? prev : '-' + prev))
	}

	function performOperation(nextOperator: Operator) {
		const inputValue = parseFloat(display)

		if (previousValue == null) {
			setPreviousValue(inputValue)
		} else if (operator) {
			const result = calculate(previousValue, inputValue, operator)
			setPreviousValue(result)
			setDisplay(formatNumber(result))
		}

		setOperator(nextOperator)
		setWaitingForOperand(true)
	}

	function equals() {
		if (operator == null || previousValue == null) return
		const inputValue = parseFloat(display)
		const result = calculate(previousValue, inputValue, operator)
		setDisplay(formatNumber(result))
		setPreviousValue(null)
		setOperator(null)
		setWaitingForOperand(true)
	}

	return (
		<div className="page">
			<div className="calculator">
				<div className="display" aria-label="display">{display}</div>
				<div className="keys">
					<button className="btn action" onClick={clearAll}>AC</button>
					<button className="btn action" onClick={backspace}>⌫</button>
					<button className="btn action" onClick={toggleSign}>±</button>
					<button className="btn operator" onClick={() => performOperation('÷')}>÷</button>

					<button className="btn" onClick={() => inputDigit('7')}>7</button>
					<button className="btn" onClick={() => inputDigit('8')}>8</button>
					<button className="btn" onClick={() => inputDigit('9')}>9</button>
					<button className="btn operator" onClick={() => performOperation('×')}>×</button>

					<button className="btn" onClick={() => inputDigit('4')}>4</button>
					<button className="btn" onClick={() => inputDigit('5')}>5</button>
					<button className="btn" onClick={() => inputDigit('6')}>6</button>
					<button className="btn operator" onClick={() => performOperation('-')}>−</button>

					<button className="btn" onClick={() => inputDigit('1')}>1</button>
					<button className="btn" onClick={() => inputDigit('2')}>2</button>
					<button className="btn" onClick={() => inputDigit('3')}>3</button>
					<button className="btn operator" onClick={() => performOperation('+')}>+</button>

					<button className="btn span-2" onClick={() => inputDigit('0')}>0</button>
					<button className="btn" onClick={inputDot}>.</button>
					<button className="btn equals" onClick={equals}>=</button>
				</div>
			</div>
		</div>
	)
}

export default App
