import {Button} from './Button.styled'

export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
        <Button onClick={onLeaveFeedback}>{options}</Button>
    )
}