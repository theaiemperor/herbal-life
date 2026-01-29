function formatNumber(num: number): string {
    return new Intl.NumberFormat("en-IN").format(num);
}

export default {
    formatNumber
}