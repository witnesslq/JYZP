package cn.edu.cqupt.ok.jdbc;

import cn.edu.cqupt.ok.po.Post;

public class DynamicSql {

	private String sql = "where ";
	private String placeholder = null;
	
	public String postDynamicSql(Post post) {
		if(post.getPositionFirstType() != null) {
			if(sql.equals("where ")) {
				sql += "positionFirstType = ? ";
			} else {
				sql += "and positionFirstType = ? ";
			}
		} 
		if(post.getPositionName() != null) {
			if(sql.equals("where ")) {
				sql += "positionName = ? ";
			} else {
				sql += "and positionName = ? ";
			}
		} 
		if(post.getCity() != null) {
			if(sql.equals("where ")) {
				sql += "city = ? ";
			} else {
				sql += "and city = ? ";
			}
		} 
		if(post.getSalary() != null) {
			if(post.getSalary().contains("以上")) {
				if(sql.equals("where ")) {
					sql += "salaryMin > ? ";
				} else {
					sql += "and salaryMin > ? ";
				} 
			} else {
				if(sql.equals("where ")) {
					sql += "salaryMin > ? and salaryMax < ? ";
				} else {
					sql += "and salary Min > ? and salary Max < ? ";
				} 
			}
		} 
		if(post.getWorkYear() != null) {
			if(sql.equals("where ")) {
				sql += "workYear = ? ";
			} else {
				sql += "and workYear = ? ";
			}
		}
		if(sql.equals("where ")) {
			return "";
		}
		return sql;
	} 
	
	public String placeholderSql(int i) {
		for(int j = 0; j < i; j++) {
			if(placeholder == null) {
				placeholder = "?,";
			} else {
				placeholder += "?,";
			}
		}
		if(placeholder == null) {
			return "";
		} else {
			return placeholder.substring(0, placeholder.length() - 1);
		}
	}
	
}
