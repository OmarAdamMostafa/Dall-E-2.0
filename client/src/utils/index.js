import { surpriseMePrompts } from '../constants'

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]

    // In order to check that we don't get the same prompt
    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt
}