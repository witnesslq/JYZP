package cn.edu.cqupt.ok.dao.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import cn.edu.cqupt.ok.dao.PostKeyDao;
import cn.edu.cqupt.ok.jdbc.JDBCTemplate;

public class PostKeyDaoImpl extends JDBCTemplate<String> implements PostKeyDao {

	@Override
	public List<String> selectKeyListPositionFirstType() {
		String sql = "select distinct positionFirstType from post";
		return this.selectAllTemplate(null, sql);
	}

	@Override
	public List<String> selectKeyListPositionName() {
		String sql = "select distinct positionName from post";
		return this.selectAllTemplate(null, sql);
	}

	@Override
	public List<String> selectKeyListCity() {
		String sql = "select city from post";
		return this.selectAllTemplate(null, sql);
	}

	@Override
	public List<String> selectKeyListSalary() {
		String sql = "select distinct salary from post";
		return this.selectAllTemplate(null,sql);
	}

	@Override
	public List<String> selectKeyListWorkYear() {
		String sql = "select distinct workYear from post";
		return this.selectAllTemplate(null, sql);
	}

	@Override
	public String selectOneOperation(String t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public String selectOneByStringConditionOperation(String t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public String selectOneByIntConditionOperation(String t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public List<String> selectAllOperation(String t, PreparedStatement ps) throws Exception {
		ResultSet rs = null;
		rs = ps.executeQuery();
		List<String> list = new ArrayList<String>();
		while(rs.next()) {
			list.add(rs.getString(1));
		}
		return list;
	}

	@Override
	public List<String> selectAllByStringConditionOperation(String t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public List<String> selectAllByIntConditionOperation(String t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public boolean createOperation(String t, PreparedStatement ps) throws Exception {
		return false;
	}

	@Override
	public boolean deleteOperation(String t, PreparedStatement ps) throws Exception {
		return false;
	}

	@Override
	public boolean updateOperation(String t, PreparedStatement ps) throws Exception {
		return false;
	}

}
