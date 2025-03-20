import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./UserProfile.css";
import provincesData from "./full_json_generated_data_vn_units.json"; // File dữ liệu địa phương

const UserProfile = () => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");

    useEffect(() => {
        setProvinces(provincesData);
    }, []);

    const handleProvinceChange = (event) => {
        const provinceCode = event.target.value;
        setSelectedProvince(provinceCode);
        setSelectedDistrict("");
        setWards([]);

        const selectedProvinceData = provincesData.find(p => p.Code === provinceCode);
        setDistricts(selectedProvinceData ? selectedProvinceData.District : []);
    };

    const handleDistrictChange = (event) => {
        const districtCode = event.target.value;
        setSelectedDistrict(districtCode);

        const selectedDistrictData = districts.find(d => d.Code === districtCode);
        setWards(selectedDistrictData ? selectedDistrictData.Ward : []);
    };

    return (
        <div className="container mt-4 user-profile" style={{ maxWidth: '1000px'}}>
            <div className="card p-4">
                <h4 className="mb-3 fw-bold">Tổng quan</h4>
                <div className="row p-3">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fs-6 fw-normal">Tên đăng nhập</p>
                                <p className="text-danger fs-6">Chưa có tên đăng nhập</p>
                                <p className="fs-6 fw-normal">Số dư</p>
                                <p className="fw-semibold fs-5">0đ</p>
                            </div>
                            <div className="col-md-4">
                                <p className="fs-6 fw-normal">Email</p>
                                <p className="fw-semibold fs-6">bevantuan9@gmail.com</p>
                                <p className="fs-6 fw-normal">Đã tích lũy</p>
                                <p className="fw-semibold fs-5">0đ</p>
                            </div>
                            <div className="col-md-4">
                                <p className="fs-6 fw-normal">Họ và tên</p>
                                <p className="fw-semibold fs-6">Tuấn Bees</p>
                                <p className="fs-6 fw-normal">Ngày tham gia</p>
                                <p className="fw-semibold fs-6">2025-03-16 13:59:35</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p className="fs-6 fw-normal">Nhóm khách hàng</p>
                        <p className="fw-semibold fs-5">Member</p>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="row p-3 align-items-center">
                    <div className="col-md-5">
                        <img
                            src="https://cdn.divineshop.vn/image/catalog/icon/avatar-khach-hang-2-52544.png?hash=1649933269"
                            alt="Avatar"
                            className="rounded-circle avatar"
                            style={{ width: "154px", height: "154px", objectFit: "cover" ,margin:"30px"}}
                        />
                        <button className="btn btn-outline-primary btn-sm">Sửa ảnh đại diện</button>

                    </div>

                    <div className="col-md-7 d-flex align-items-center border-start  h-100">
                        <p className="m-0 fs-6 fw-normal text-secondary">
                            Vui lòng chọn ảnh nhỏ hơn 5MB<br />
                            Chọn hình ảnh phù hợp, không phản cảm
                        </p>
                    </div>
                </div>
            </div>

            <div className="card p-4 mb-3">  
                <h4 className="mb-3">Cá nhân</h4>
                <div className="mb-2 text-danger">Bạn vui lòng cập nhật tên đăng nhập</div>
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control "style={{ width: "45%" }}  placeholder="Tên đăng nhập" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control " style={{ width: "45%" }} value="Tuấn Bees" readOnly />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control  " style={{ width: "45%" }}  placeholder="Số điện thoại" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control " style={{ width: "45%" }}  placeholder="Chứng minh nhân dân" />
                    </div>
                    <div className="custom-select-wrapper mb-3" style={{ width: "45%" }}>
                        <select className="form-control custom-select">
                            <option>Giới tính</option>
                            <option>Nam</option>
                            <option>Nữ</option>
                        </select>
                    </div>
                    <div className="custom-select-wrapper mb-3" style={{ width: "45%" }}> 
                        <select onChange={handleProvinceChange} value={selectedProvince} className="form-control custom-select">
                            <option value="">Chọn tỉnh/thành phố</option>
                            {provinces.map((province) => (
                                <option key={province.Code} value={province.Code}>{province.Name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="custom-select-wrapper mb-3" style={{ width: "45%" }}>
                        <select onChange={handleDistrictChange} value={selectedDistrict} className="form-control custom-select" disabled={!selectedProvince}>
                            <option value="">Chọn quận/huyện</option>
                            {districts.map((district) => (
                                <option key={district.Code} value={district.Code}>{district.Name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="custom-select-wrapper mb-3" style={{ width: "45%" }}>
                        <select className="form-control custom-select" disabled={!selectedDistrict}>
                            <option value="">Chọn xã/phường</option>
                            {wards.map((ward) => (
                                <option key={ward.Code} value={ward.Code}>{ward.Name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3" style={{ width: "45%" }}>
                        <input type="text" className="form-control w-35 hover-underline" placeholder="Số nhà / Đường" />
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="showName" />
                        <label className="form-check-label" htmlFor="showName">
                            Cho phép hiển thị tên của bạn trên các hoạt động
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary " style={{ width: "45%" }}>Lưu thay đổi</button>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;
