import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerCustom({ id, name, value, handleDateChange }) {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
              sx={{ width: '100%' }}
              id={id}
              name={name}
              value={value}
              onChange={handleDateChange}
          />
      </LocalizationProvider>
  );
}
