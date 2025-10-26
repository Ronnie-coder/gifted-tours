// src/components/ThemeSwitch.tsx
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react'; // A popular icon library. Install with `pnpm add lucide-react`

const style = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--text-primary)',
};

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={style} aria-label="Toggle theme">
      {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
};

export default ThemeSwitch;