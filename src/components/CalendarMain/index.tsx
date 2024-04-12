import React from 'react';
import { View } from 'react-native';
import { CalendarView, DaysView, TextCalendar, TextDay } from './styles';

const Calendar = () => {
  const currentDate = new Date();
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const dates = Array.from({ length: 7 }).map((_, index) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 3 + index);
    return newDate;
  });

  return (
    <CalendarView>
      <TextCalendar style={{marginLeft: 5}}>Você fez 0 questões hoje!</TextCalendar>
      <DaysView>
        {dates.map((date, index) => {
          const day = daysOfWeek[date.getDay()];
          const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1);
          return (
            <View
              key={index}
              style={{
                backgroundColor:
                  index === 3 ? 'rgba(41,165,218,.65)' : 'transparent',
                borderRadius: 15,
                padding: 10,
                alignItems: 'center',
              }}
            >
              <TextCalendar>{capitalizedDay}</TextCalendar>
              <TextDay>{date.getDate()}</TextDay>
            </View>
          );
        })}
      </DaysView>
    </CalendarView>
  );
};

export default Calendar;
