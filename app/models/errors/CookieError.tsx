export interface CookieError{
    code: number,
    type: string,
    message: string
}

export function isCookieError(obj: any): obj is CookieError {
    return 'code' in obj && 'type' in obj && 'message' in obj;
}