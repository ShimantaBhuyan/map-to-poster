const STORAGE_KEY = 'mtp_custom_themes';
const MAX_THEMES = 5;

export function loadCustomThemes() {
	try {
		return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	} catch {
		return [];
	}
}

export function saveCustomTheme(theme) {
	const all = loadCustomThemes().filter(t => t.id !== theme.id);
	const updated = [{ ...theme, isCustom: true }, ...all].slice(0, MAX_THEMES);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
	return updated;
}

export function deleteCustomTheme(id) {
	const updated = loadCustomThemes().filter(t => t.id !== id);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
	return updated;
}

export function generateThemeId() {
	return `custom_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
}
