/**
 * Removes the first character from a string if it exists
 * @param str The input string
 * @returns The string without the first character, or empty string if input is empty/null/undefined
 */
export const translateSuggestion = (str: string | null | undefined, language: string): string => {
  if (!str) return '';

  switch (language) {
    case "it":
      switch (str) {
        case 'BEIGE':
          return 'BEIGE';
        case 'BEIGE ASH':
          return 'BEIGE ASH';
        case 'BEIGE VIOLA':
          return 'BEIGE VIOLA';
        case 'CENERE':
          return 'CENERE';
        case 'CENERE INTENSO':
          return 'CENERE INTENSO';
        case 'DORATO':
          return 'DORATO';
        case 'DORATO RAME':
          return 'DORATO RAME';
        case 'MARRONE':
          return 'MARRONE';
        case 'MOGANO':
          return 'MOGANO';
        case 'NATURAL':
          return 'NATURAL';
        case 'NATURAL BEIGE':
          return 'NATURAL BEIGE';
        case 'NATURALE':
          return 'NATURALE';
        case 'NATURALE INTENSO':
          return 'NATURALE INTENSO';
        case 'NATURALE VIOLA':
          return 'NATURALE VIOLA';
        case 'RAME':
          return 'RAME';
        case 'RAME DORATO':
          return 'RAME DORATO';
        case 'RAME INTENSO':
          return 'RAME INTENSO';
        case 'RED VIOLET':
          return 'RED VIOLET';
        case 'ROSSO':
          return 'ROSSO';
        case 'VIOLA':
          return 'VIOLA';
        case 'VIOLA ROSSO':
          return 'VIOLA ROSSO';
        case 'VIOLET NATURAL':
          return 'VIOLET NATURAL';
        default:
          return str;
      }
    case "en":
      switch (str) {
        case 'BEIGE':
          return 'BEIGE';
        case 'BEIGE ASH':
          return 'BEIGE ASH';
        case 'BEIGE VIOLA':
          return 'BEIGE VIOLET';
        case 'CENERE':
          return 'ASH';
        case 'CENERE INTENSO':
          return 'INTENSE ASH';
        case 'DORATO':
          return 'GOLDEN';
        case 'DORATO RAME':
          return 'GOLDEN COPPER';
        case 'MARRONE':
          return 'BROWN';
        case 'MAHOGANY':
          return 'MAHOGANY';
        case 'NATURAL':
          return 'NATURAL';
        case 'NATURAL BEIGE':
          return 'NATURAL BEIGE';
        case 'NATURALE':
          return 'NATURAL';
        case 'NATURALE INTENSO':
          return 'INTENSE NATURAL';
        case 'NATURALE VIOLA':
          return 'VIOLET NATURAL';
        case 'RAME':
          return 'COPPER';
        case 'RAME DORATO':
          return 'GOLDEN COPPER';
        case 'RAME INTENSO':
          return 'INTENSE COPPER';
        case 'VIOLA':
          return 'VIOLET';
        case 'VIOLA ROSSO':
          return 'RED VIOLET';
        case 'VIOLET NATURAL':
          return 'VIOLET NATURAL';
        default:
          return str;
      }
    case "es":
      switch (str) {
        case 'BEIGE':
          return 'BEIGE';
        case 'BEIGE ASH':
          return 'BEIGE ASH';
        case 'BEIGE VIOLA':
          return 'BEIGE VIOLETA';
        case 'CENERE':
          return 'CENIZA';
        case 'CENERE INTENSO':
          return 'CENIZA INTENSA';
        case 'DORATO':
          return 'DORADO';
        case 'DORATO RAME':
          return 'DORADO COBRE';
        case 'MARRONE':
          return 'MARRÓN';
        case 'MOGANO':
          return 'CAOBA';
        case 'NATURAL':
          return 'NATURAL';
        case 'NATURAL BEIGE':
          return 'BEIGE NATURAL';
        case 'NATURALE':
          return 'NATURAL';
        case 'NATURALE INTENSO':
          return 'NATURAL INTENSO';
        case 'NATURALE VIOLA':
          return 'NATURAL VIOLETA';
        case 'RAME':
          return 'COBRE';
        case 'RAME DORATO':
          return 'DORADO COBRE';
        case 'RAME INTENSO':
          return 'COBRE INTENSO';
        case 'RED VIOLET':
          return 'ROJO VIOLETA';
        case 'ROSSO':
          return 'ROJO';
        case 'VIOLA':
          return 'VIOLETA';
        case 'VIOLA ROSSO':
          return 'ROJO VIOLETA';
        case 'VIOLET NATURAL':
          return 'VIOLETA NATURAL';
        default:
          return str;
      }
    case "fr":
      switch (str) {
        case 'BEIGE':
          return 'BEIGE';
        case 'BEIGE ASH':
          return 'ASH BEIGE';
        case 'BEIGE VIOLA':
          return 'BEIGE VIOLET';
        case 'CENERE':
          return 'CENDRÉ';
        case 'CENERE INTENSO':
          return 'CENDRÉ INTENSE';
        case 'DORATO':
          return 'DORÉ';
        case 'DORATO RAME':
          return 'DORÉ CUIVRÉ';
        case 'MARRONE':
          return 'MARRON';
        case 'MOGANO':
          return 'MAHOGANY';
        case 'NATURAL':
          return 'NATUREL';
        case 'NATURAL BEIGE':
          return 'BEIGE NATUREL';
        case 'NATURALE':
          return 'NATUREL';
        case 'NATURALE INTENSO':
          return 'NATUREL INTENSE';
        case 'NATURALE VIOLA':
          return 'NATUREL VIOLET';
        case 'RAME':
          return 'CUIVRÉ';
        case 'RAME DORATO':
          return 'DORÉ CUIVRÉ';
        case 'RAME INTENSO':
          return 'CUIVRÉ INTENSE';
        case 'RED VIOLET':
          return 'ROUGE VIOLET';
        case 'ROSSO':
          return 'ROUGE';
        case 'VIOLA':
          return 'VIOLET';
        case 'VIOLA ROSSO':
          return 'ROUGE VIOLET';
        case 'VIOLET NATURAL':
          return 'VIOLET NATUREL';
        default:
          return str;
      }
    case "de":
      switch (str) {
        case 'BEIGE':
          return 'BEIGE';
        case 'BEIGE ASH':
          return 'ASH BEIGE';
        case 'BEIGE VIOLA':
          return 'BEIGE VIOLET';
        case 'CENERE':
          return 'CENDRÉ';
        case 'CENERE INTENSO':
          return 'CENDRÉ INTENSE';
        case 'DORATO':
          return 'DORÉ';
        case 'DORATO RAME':
          return 'DORÉ CUIVRÉ';
        case 'MARRONE':
          return 'MARRON';
        case 'MOGANO':
          return 'MAHOGANY';
        case 'NATURAL':
          return 'NATUREL';
        case 'NATURAL BEIGE':
          return 'BEIGE NATUREL';
        case 'NATURALE':
          return 'NATUREL';
        case 'NATURALE INTENSO':
          return 'NATUREL INTENSE';
        case 'NATURALE VIOLA':
          return 'NATUREL VIOLET';
        case 'RAME':
          return 'CUIVRÉ';
        case 'RAME DORATO':
          return 'DORÉ CUIVRÉ';
        case 'RAME INTENSO':
          return 'CUIVRÉ INTENSE';
        case 'RED VIOLET':
          return 'ROUGE VIOLET';
        case 'ROSSO':
          return 'ROUGE';
        case 'VIOLA':
          return 'VIOLET';
        case 'VIOLA ROSSO':
          return 'ROUGE VIOLET';
        case 'VIOLET NATURAL':
          return 'VIOLET NATUREL';
        default:
          return str;
      }
    case "nl":
      switch (str) {
        case 'BEIGE':
          return 'BEIGE';
        case 'BEIGE ASH':
          return 'BEIGE ASH';
        case 'BEIGE VIOLA':
          return 'BEIGE VIOLET';
        case 'CENERE':
          return 'ASCHE';
        case 'CENERE INTENSO':
          return 'INTENSE ASCHE';
        case 'DORATO':
          return 'GOUD';
        case 'DORATO RAME':
          return 'GOUDEN KOPER';
        case 'MARRONE':
          return 'BRUIN';
        case 'MOGANO':
          return 'MAHONI';
        case 'NATURAL':
          return 'NATUURLIJK';
        case 'NATURAL BEIGE':
          return 'BEIGE NATUUR';
        case 'NATURALE':
          return 'NATUURLIJK';
        case 'NATURALE INTENSO':
          return 'INTENSE NATUUR';
        case 'NATURALE VIOLA':
          return 'NATUURLIJKE VIOLET';
        case 'RAME':
          return 'KOPER';
        case 'RAME DORATO':
          return 'GOUDEN KOPER';
        case 'RAME INTENSO':
          return 'INTENSE KOPER';
        case 'RED VIOLET':
          return 'RODE VIOLET';
        case 'ROSSO':
          return 'ROOD';
        case 'VIOLA':
          return 'VIOLET';
        case 'VIOLA ROSSO':
          return 'RODE VIOLET';
        case 'VIOLET NATURAL':
          return 'NATUURLIJKE VIOLET';
        default:
          return str;
      }
    case "pl":
      switch (str) {
        case 'BEIGE':
          return 'BEŻOWY';
        case 'BEIGE ASH':
          return 'BEŻOWY POPIELATY';
        case 'BEIGE VIOLA':
          return 'BEŻOWY FIOLETOWY';
        case 'CENERE':
          return 'POPIELATY';
        case 'CENERE INTENSO':
          return 'INTENSYWNY POPIELATY';
        case 'DORATO':
          return 'ZŁOTY';
        case 'DORATO RAME':
          return 'ZŁOTY MIEDŹ';
        case 'MARRONE':
          return 'BRĄZOWY';
        case 'MOGANO':
          return 'MAHAGON';
        case 'NATURAL':
          return 'NATURALNY';
        case 'NATURAL BEIGE':
          return 'NATURALNY BEŻOWY';
        case 'NATURALE':
          return 'NATURALNY';
        case 'NATURALE INTENSO':
          return 'INTENSYWNY NATURALNY';
        case 'NATURALE VIOLA':
          return 'NATURALNY FIOLETOWY';
        case 'RAME':
          return 'MIEDŹ';
        case 'RAME DORATO':
          return 'ZŁOTY MIEDŹ';
        case 'RAME INTENSO':
          return 'INTENSYWNY MIEDŹ';
        case 'RED VIOLET':
          return 'CZERWONY FIOLETOWY';
        case 'ROSSO':
          return 'CZERWONY';
        case 'VIOLA':
          return 'FIOLETOWY';
        case 'VIOLA ROSSO':
          return 'CZERWONY FIOLETOWY';
        case 'VIOLET NATURAL':
          return 'NATURALNY FIOLETOWY';
        default:
          return str;
      }
    case "pt":
      switch (str) {
        case 'BEIGE':
          return 'BEGE';
        case 'BEIGE ASH':
          return 'BEGE CINZA';
        case 'BEIGE VIOLA':
          return 'BEGE VIOLETA';
        case 'CENERE':
          return 'CINZA';
        case 'CENERE INTENSO':
          return 'CINZA INTENSO';
        case 'DORATO':
          return 'DOURADO';
        case 'DORATO RAME':
          return 'DOURADO COBRE';
        case 'MARRONE':
          return 'MARROM';
        case 'MOGANO':
          return 'CAOBA';
        case 'NATURAL':
          return 'NATURAL';
        case 'NATURAL BEIGE':
          return 'BEGE NATURAL';
        case 'NATURALE':
          return 'NATURAL';
        case 'NATURALE INTENSO':
          return 'NATURAL INTENSO';
        case 'NATURALE VIOLA':
          return 'NATURAL VIOLETA';
        case 'RAME':
          return 'COBRE';
        case 'RAME DORATO':
          return 'DOURADO COBRE';
        case 'RAME INTENSO':
          return 'COBRE INTENSO';
        case 'RED VIOLET':
          return 'VERMELHO VIOLETA';
        case 'ROSSO':
          return 'VERMELHO';
        case 'VIOLA':
          return 'VIOLETA';
        case 'VIOLA ROSSO':
          return 'VERMELHO VIOLETA';
        case 'VIOLET NATURAL':
          return 'VIOLETA NATURAL';
        default:
          return str;
      }
    default:
      return str;
  }
}; 