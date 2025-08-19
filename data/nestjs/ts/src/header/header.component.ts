

export function showHeader() {
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = '<h2>Hello from <span style="color: green">TypeScript By Bahadur Khan </span>!</h2>';
    }
}