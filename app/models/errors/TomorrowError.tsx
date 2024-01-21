export interface TomorrowError{
    code: number,
    type: string,
    message: string
}

export function isTomorrowError(obj: any): obj is TomorrowError {
    return 'code' in obj && 'type' in obj && 'message' in obj;
}