import lesson1am from './lesson-1am';
import lesson2am from './lesson-2am';
import lesson3am from './lesson-3am';
import lesson4am from './lesson-4am';

export const LESSONS_DATA = {
  '1am': lesson1am,
  '2am': lesson2am,
  '3am': lesson3am,
  '4am': lesson4am,
};

export const LESSONS_LIST = Object.values(LESSONS_DATA);