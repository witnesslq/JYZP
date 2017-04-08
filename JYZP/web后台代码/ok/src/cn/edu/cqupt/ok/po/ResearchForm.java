package cn.edu.cqupt.ok.po;

public class ResearchForm {
	private int formId;
	private String title;
	private String content;
	private int userId;
	private String keyString;
	private int keyInt;
	public int getFormId() {
		return formId;
	}
	public void setFormId(int formId) {
		this.formId = formId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
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
}
