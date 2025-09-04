import { LocaleProvider } from './contexts/LocaleContext';

export function rootContainer(container: any) {
  return <LocaleProvider>{container}</LocaleProvider>;
}
