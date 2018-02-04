import { IQuestionOption } from './IQuestionOption';

export interface IQuestion {
    id: number;
    question: string;
    answer?: string;
    options?: IQuestionOption[];
    result?: number;
}
