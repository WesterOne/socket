const expect = require('expect');
const { generateMessage } = require('./message')

describe('generateMessage', () => {
    it('Should generate correct message object', () => {
        let from = 'MyPersonalMail'
        let text = 'A new message'
        let message = generateMessage(from, text)
        
        expect(typeof message.createdAt).toBe('number')
        expect(message).toMatchObject({
            from,
            text
        })

    })
})