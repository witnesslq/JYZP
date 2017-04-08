package cn.edu.cqupt.ok.dao.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import cn.edu.cqupt.ok.dao.ResearchFormDao;
import cn.edu.cqupt.ok.jdbc.JDBCTemplate;
import cn.edu.cqupt.ok.po.ResearchForm;
import cn.edu.cqupt.ok.po.User;

public class ResearchFormDaoImpl extends JDBCTemplate<ResearchForm> implements ResearchFormDao {

	@Override
	public List<ResearchForm> selectResearchFormByUserId(User user) {
		ResearchForm researchForm = new ResearchForm();
		researchForm.setKeyInt(user.getUserId());
		String sql = "select * from research_form where user_userId = ?";
		return this.selectAllByIntConditionTemplate(researchForm, sql);
	}

	@Override
	public boolean insertResearchForm(ResearchForm researchForm) {
		String sql = "insert into research_form (title, content, user_userId) values (?, ?, ?)";
		return this.createTemplate(researchForm, sql);
	}

	@Override
	public boolean updateResearchForm(ResearchForm researchForm) {
		String sql = "update research_form formId = ?, title = ?, content = ?, user_userId = ?";
		return this.createTemplate(researchForm, sql);
	}

	@Override
	public ResearchForm selectOneOperation(ResearchForm t, PreparedStatement ps) throws Exception {
		return null;
	}
	
	@Override
	public ResearchForm selectOneByStringConditionOperation(ResearchForm t, PreparedStatement ps) {
		return null;
	}
	
	@Override
	public ResearchForm selectOneByIntConditionOperation(ResearchForm t, PreparedStatement ps) {
		return null;
	}

	@Override
	public List<ResearchForm> selectAllOperation(ResearchForm t, PreparedStatement ps) {
		return null;
	}
	
	@Override
	public List<ResearchForm> selectAllByStringConditionOperation(ResearchForm t, PreparedStatement ps) {
		return null;
	}

	@Override
	public List<ResearchForm> selectAllByIntConditionOperation(ResearchForm t, PreparedStatement ps) throws Exception {
	ResultSet rs = null;
		ps.setInt(1, t.getKeyInt());
		rs = ps.executeQuery();
		List<ResearchForm> list = new ArrayList<ResearchForm>();
		while(rs.next()) {
			ResearchForm researchForm = new ResearchForm();
			researchForm.setFormId(rs.getInt("formId"));
			researchForm.setTitle(rs.getString("title"));
			researchForm.setContent(rs.getString("content"));
			researchForm.setUserId(rs.getInt("user_userId"));
			list.add(researchForm);
		}
		return list;
	} 

	@Override
	public boolean createOperation(ResearchForm t, PreparedStatement ps) throws Exception {
		ps.setString(1, t.getTitle());
		ps.setString(2, t.getContent());
		ps.setInt(3, t.getUserId());
		int i  = ps.executeUpdate();
		if(i == 0) {
			return false;
		} else {
			return true;
		}
	}

	@Override
	public boolean deleteOperation(ResearchForm t, PreparedStatement ps) {
		return false;
	}

	@Override
	public boolean updateOperation(ResearchForm t, PreparedStatement ps) throws Exception {
		return false;
	}

}
