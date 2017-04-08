package cn.edu.cqupt.ok.dao.impl;

import java.sql.PreparedStatement;
import java.util.List;

import cn.edu.cqupt.ok.dao.PostLabelDao;
import cn.edu.cqupt.ok.jdbc.JDBCTemplate;
import cn.edu.cqupt.ok.po.PostLabel;

public class PostLabelDaoImpl extends JDBCTemplate<PostLabel> implements PostLabelDao {

	@Override
	public boolean insertPostLable(PostLabel postLabel) {
		String sql = "insert into post_label values(?,?)";
		return createTemplate(postLabel, sql);
	}
	
	@Override
	public PostLabel selectOneOperation(PostLabel t, PreparedStatement ps) throws Exception {
		return null;
	}
	
	@Override
	public PostLabel selectOneByStringConditionOperation(PostLabel t, PreparedStatement ps) throws Exception {
		return null;
	}
	
	@Override
	public PostLabel selectOneByIntConditionOperation(PostLabel t, PreparedStatement ps) {
		return null;
	}

	@Override
	public List<PostLabel> selectAllOperation(PostLabel t, PreparedStatement ps) {
		return null;
	}

	@Override
	public List<PostLabel> selectAllByStringConditionOperation(PostLabel t, PreparedStatement ps) {
		return null;
	}
	
	@Override
	public List<PostLabel> selectAllByIntConditionOperation(PostLabel t, PreparedStatement ps) {
		return null;
	}

	@Override
	public boolean createOperation(PostLabel t, PreparedStatement ps) throws Exception {
		ps.setInt(1, t.getLableId());
		ps.setString(2, t.getLableName());
		int i  = ps.executeUpdate();
		if(i == 0) {
			return false;
		} else {
			return true;
		}
	}

	@Override
	public boolean deleteOperation(PostLabel t, PreparedStatement ps) {
		return false;
	}

	@Override
	public boolean updateOperation(PostLabel t, PreparedStatement ps) throws Exception {
		return false;
	}

}
