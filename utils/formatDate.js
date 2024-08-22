import { format, parseISO } from 'date-fns';
import { sv } from 'date-fns/locale';

export function formatPublishedAt(publishedAt, locale = sv) {
  const date = parseISO(publishedAt);
  return format(date, 'PPP', { locale });
}