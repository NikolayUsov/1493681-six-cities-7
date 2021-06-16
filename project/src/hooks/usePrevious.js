import { useEffect, useRef } from 'react';

export default function usePrevious(value) {
/*   почему в этом выводе при обновлении меню два раза вывод в
    консоль  я дебагером просмотрел почему реакт рендерит все по два раза
    что логику useEffect не допонимаю to-do */
  console.log(value);
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
