type Input = Record<string, never>
type Output = Record<string, never>

type Fn = (input: Input) => Output

describe('fn contract', () => {
    it('returns empty output for empty input', () => {
        const fn: Fn = (input) => {
            return {}
        }

        const result = fn({})
        expect(result).toEqual({})
    })
})
