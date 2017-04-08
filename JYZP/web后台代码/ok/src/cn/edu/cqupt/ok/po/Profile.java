package cn.edu.cqupt.ok.po;

public class Profile {
	private int profileId;
	private String sex;
	private String phoneNumber;
	private String school;
	private String major;
	private String graduateDate;
	private String degree;
	private int userId;
	private String keyString;
	private int keyInt;
	public int getProfileId() {
		return profileId;
	}
	public void setProfileId(int profileId) {
		this.profileId = profileId;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		this.school = school;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public String getGraduateDate() {
		return graduateDate;
	}
	public void setGraduateDate(String graduateDate) {
		this.graduateDate = graduateDate;
	}
	public String getDegree() {
		return degree;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getKeyString() {
		return keyString;
	}
	public void setKeyString(String keyString) {
		this.keyString = keyString;
	}
	public int getKeyInt() {
		return keyInt;
	}
	public void setKeyInt(int keyInt) {
		this.keyInt = keyInt;
	}
	@Override
	public String toString() {
		return "Profile [profileId=" + profileId + ", sex=" + sex + ", phoneNumber=" + phoneNumber + ", school="
				+ school + ", major=" + major + ", graduateDate=" + graduateDate + ", degree=" + degree + ", userId="
				+ userId + ", keyString=" + keyString + ", keyInt=" + keyInt + "]";
	}
	
}
