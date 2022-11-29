exports.parse = (buttons = []) => {
    let buttonResult = []
    for (let i = 0; i < buttons.length; i++) {
        const buttonType = buttons[i]?.type
        const buttonDisplay = buttons[i]?.display
        const buttonId = buttons[i]?.id
        const buttonUrl = buttons[i]?.url
        const buttonCopy = buttons[i]?.copy
        const buttonPhone = buttons[i]?.phone

        switch (buttonType) {
            case 'reply':
                const replyButton = {
                    buttonId,
                    buttonText: {
                        displayText: buttonDisplay
                    },
                    type: 1
                }
                buttonResult.push(replyButton)
                break
            case 'quick':
                const quickButton = {
                    index: i,
                    quickReplyButton: {
                        displayText: buttonDisplay,
                        id: buttonId
                    }
                }
                buttonResult.push(quickButton)
                break
            case 'url':
                const urlButton = {
                    index: i,
                    urlButton: {
                        displayText: buttonDisplay,
                        url: buttonUrl
                    }
                }
                buttonResult.push(urlButton)
                break
            case 'copy':
                const copyButton = {
                    index: i,
                    urlButton: {
                        displayText: buttonDisplay,
                        url: 'https://www.whatsapp.com/otp/copy/' + buttonCopy
                    }
                }
                buttonResult.push(copyButton)
                break
            case 'phone':
                const phoneButton = {
                    index: i,
                    callButton: {
                        displayText: buttonDisplay,
                        phoneNumber: buttonPhone
                    }
                }
                buttonResult.push(phoneButton)
                break
        }
    }
    if (buttonResult.length > 5) throw new Error('\n> Failed to parse button!\n> Maks. 5 button\nsee the documentation for the details information\n')
    return buttonResult
}