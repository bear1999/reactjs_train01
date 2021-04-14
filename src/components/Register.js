import {
    TextField,
    Button,
    Card,
    CardContent,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    InputLabel,
    Select,
} from '@material-ui/core';

function Register() {
    return (
        <div className="container col-md-4">
            <form>
                <Card>
                    <CardContent>
                        <h2 className="text-center">Đăng ký tài khoản</h2>
                        <TextField id="outlined-basic" label="Họ tên" variant="outlined" className="col" />
                        <FormControl component="fieldset" className="col">
                            <FormLabel component="legend">Giới tính:</FormLabel>
                            <RadioGroup aria-label="GioiTinh" name="GioiTinh" value="Nam">
                                <FormControlLabel value="Nam" control={<Radio />} label="Nam" />
                                <FormControlLabel value="Nữ" control={<Radio />} label="Nữ" />
                            </RadioGroup>
                        </FormControl>

                        <TextField id="outlined-basic" label="Số điện thoại" variant="outlined" className="col" type="phone" />
                        <TextField id="outlined-basic" label="Địa chỉ Email" variant="outlined" className="col" />
                        <TextField id="outlined-basic" label="Mật khẩu" variant="outlined" type="password" className="col" />

                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-age-native-simple">Chức vụ</InputLabel>
                            <Select
                                native
                                value={1}
                                label="ChucVu"
                                inputProps={{
                                    name: 'ChucVu',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="Chức vChucVu" value="" />
                                <option value={1}>Khách hàng</option>
                                <option value={2}>Kinh doanh</option>
                                <option value={3}>Quản lý</option>
                                <option value={4}>Admin</option>
                            </Select>
                        </FormControl>

                        <div className="text-center">
                            <Button variant="contained" color="primary" type="submit">Đăng ký</Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    )
}

export default Register;