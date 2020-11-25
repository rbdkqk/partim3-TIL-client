import Date from '../Atoms/todayF';
import axios from 'axios';

export default function sendReview(title: string, context: string, currentUser: number | null) {
  // dispatch(calendarStart());
  // return 이 없어도 axios는 잘 작동되는데 return이 필요한 이유?
  // 현재 유저를 매번 리덕스에서 확인하는 방식이 맞나..?

  return axios
    .post(
      `http://localhost:5000/calendar/review`,
      {
        title: title,
        context: context,
        imageUrl: '/wow.com',
        scheduleTime: JSON.stringify(Date),
        id: currentUser,
      },
      { withCredentials: true },
    )
    .then(res => {
      const { reviews } = res.data;
      // dispatch(calendarSuccess(todos, reviews));
    })
    .catch(err => {
      console.log('err?', err);
      // dispatch(calendarFailure());
    });
}
