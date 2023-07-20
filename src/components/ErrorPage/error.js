import { Report } from 'notiflix/build/notiflix-report-aio';

export const errorServes = () => {
  Report.failure(
    "We're sorry!",
    "We're experiencing some problems. Please try again later.",
    'Okay'
  );
};
Report.init({
  width: '300px',
  plainText: true,
});
