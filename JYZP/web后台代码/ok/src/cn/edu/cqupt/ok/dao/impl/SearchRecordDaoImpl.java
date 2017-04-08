package cn.edu.cqupt.ok.dao.impl;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.util.List;

import cn.edu.cqupt.ok.dao.SearchRecordDao;
import cn.edu.cqupt.ok.jdbc.JDBCTemplate;
import cn.edu.cqupt.ok.po.SearchRecord;

public class SearchRecordDaoImpl extends JDBCTemplate<SearchRecord> implements SearchRecordDao {

	@Override
	public boolean insertSearchRecord(SearchRecord searchRecord) {
		String sql = "insert into search_record values(?,?,?,?,?)";
		return this.createTemplate(searchRecord, sql);
	}

	@Override
	public SearchRecord selectOneByStringConditionOperation(SearchRecord t, PreparedStatement ps) {
		return null;
	}
	
	@Override
	public SearchRecord selectOneByIntConditionOperation(SearchRecord t, PreparedStatement ps) {
		return null;
	}

	@Override
	public List<SearchRecord> selectAllOperation(SearchRecord t, PreparedStatement ps) {
		return null;
	}
	

	@Override
	public SearchRecord selectOneOperation(SearchRecord t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public List<SearchRecord> selectAllByStringConditionOperation(SearchRecord t, PreparedStatement ps) {
		return null;
	}
	
	@Override
	public List<SearchRecord> selectAllByIntConditionOperation(SearchRecord t, PreparedStatement ps) {
		return null;
	}

	@Override
	public boolean createOperation(SearchRecord t, PreparedStatement ps) throws Exception {
		ps.setInt(1, t.getRecordId());
		ps.setString(2, t.getSearchContent());
		ps.setDate(3, (Date) t.getStime());
		ps.setByte(4, t.getStype());
		ps.setInt(5, t.getUserId());
		int i  = ps.executeUpdate();
		if(i == 0) {
			return false;
		} else {
			return true;
			}
	}

	@Override
	public boolean deleteOperation(SearchRecord t, PreparedStatement ps) {
		return false;
	}

	@Override
	public boolean updateOperation(SearchRecord t, PreparedStatement ps) throws Exception {
		return false;
	}

}
