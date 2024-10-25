interface IFetchResError extends Error {
    status?: number;
}

export function convertToEmoji(countryCode: string): string {
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char: string) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}

export function throwFetchResError(
    message: string,
    res: { status: number }
): void {
    const error: IFetchResError = new Error(message) as IFetchResError;
    error.status = res.status;
    throw error;
}
