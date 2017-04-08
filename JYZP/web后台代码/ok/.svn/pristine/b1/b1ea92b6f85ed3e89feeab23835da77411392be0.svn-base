package cn.edu.cqupt.ok.dao.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import cn.edu.cqupt.ok.dao.PostCountDao;
import cn.edu.cqupt.ok.jdbc.DynamicSql;
import cn.edu.cqupt.ok.jdbc.JDBCTemplate;
import cn.edu.cqupt.ok.jdbc.ParamsList;
import cn.edu.cqupt.ok.jdbc.RowMapperOne;
import cn.edu.cqupt.ok.po.Post;

public class PostCountDaoImpl extends JDBCTemplate<Integer> implements PostCountDao {

	@Override
	public int showPostCount() {
		String sql = "select count(*) from post";
		return this.selectOneTemplate(null, sql);
	}
	
	@Override
	public int showPostCombineConditionCount(final Post post) {
		DynamicSql dynamicSql = new DynamicSql();
		String s = dynamicSql.postDynamicSql(post);
		String sql = "select count(*) from post " +  s;
		return this.selectOneByCombineConditionTemplate(new ParamsList<String>(){

			@Override
			public List<String> params() throws Exception {
				List<String> list = new ArrayList<String>();
				if(post.getPositionFirstType() != null) {
					list.add(post.getPositionFirstType());
				} 
				if(post.getPositionName() != null) {
					list.add(post.getPositionName());
				} 
				if(post.getCity() != null) {
					list.add(post.getCity());
				}
				if(post.getSalary() != null) {
					String min;
					String max;
					if(post.getSalary().contains("以下")||post.getSalary().contains("以上")) {
						if(post.getSalary().contains("以下")) {
							String[] s = post.getSalary().split("k以下");
							min = "0";
							max = s[0];
							list.add(min);
	 						list.add(max);
						} else {
							String[] s = post.getSalary().split("k以上");
							min = s[0];
							list.add(min);
						}
 					} else {
 						String string = post.getSalary().replace("-", "");
 						String[] s = string.split("k");
 						min = s[0];
 						max = s[1];
 						list.add(min);
 						list.add(max);
					}
				} 
				if(post.getWorkYear() != null) {
					list.add(post.getWorkYear());
				}
				return list;
			}}, sql, new RowMapperOne<Integer>() {
				
				@Override
				public Integer mapRowOne(ResultSet rs) throws Exception {
					return rs.getInt(1);
				}}

			);
	}
	
	@Override
	public int showPostByLabelNameCount(String labelNames) {
		String sql = "select count(*) from post_label where labelName in (" + labelNames + ")";
		return this.selectOneTemplate(null, sql);
	}

	@Override
	public Integer selectOneOperation(Integer t, PreparedStatement ps) throws Exception {
		ResultSet rs = null;
		rs = ps.executeQuery();
		if(rs.next()) {
			return rs.getInt(1);
		} else {
			throw new RuntimeException("查询失败");
		}
	}

	@Override
	public Integer selectOneByStringConditionOperation(Integer t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public Integer selectOneByIntConditionOperation(Integer t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public List<Integer> selectAllOperation(Integer t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public List<Integer> selectAllByStringConditionOperation(Integer t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public List<Integer> selectAllByIntConditionOperation(Integer t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public boolean createOperation(Integer t, PreparedStatement ps) throws Exception {
		return false;
	}

	@Override
	public boolean deleteOperation(Integer t, PreparedStatement ps) throws Exception {
		return false;
	}

	@Override
	public boolean updateOperation(Integer t, PreparedStatement ps) throws Exception {
		return false;
	}

}
