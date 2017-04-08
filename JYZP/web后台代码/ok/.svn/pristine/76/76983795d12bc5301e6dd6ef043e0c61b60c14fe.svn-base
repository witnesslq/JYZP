package cn.edu.cqupt.ok.dao.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import cn.edu.cqupt.ok.dao.PostDao;
import cn.edu.cqupt.ok.jdbc.DynamicSql;
import cn.edu.cqupt.ok.jdbc.JDBCTemplate;
import cn.edu.cqupt.ok.jdbc.ParamsList;
import cn.edu.cqupt.ok.jdbc.RowMapper;
import cn.edu.cqupt.ok.po.Post;
import cn.edu.cqupt.ok.po.User;

public class PostDaoImpl extends JDBCTemplate<Post> implements PostDao {

	@Override
	public List<Post> selectAllPosts(int page) {
		int tag = (page-1)*10;
		String sql = "select * from post limit " + tag + "," + 10;
		return this.selectAllTemplate(null, sql);
	}

	@Override
	public boolean insertPost(Post post) {
		String sql = "insert into post values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		return createTemplate(post, sql);
	}

	@Override
	public boolean deletePostByPostId(Post post) {
		String sql = "delete from post where postId = ?";
		return deleteTemplate(post, sql);
	}
	
	@Override
	public List<Post> selectPostsByLabelName(String postLabelNames, int page) {
		int tag = (page-1)*10;
		Post post = new Post();
		post.setKeyString(postLabelNames);
		DynamicSql dynamicSql = new DynamicSql();
		String s = dynamicSql.placeholderSql(postLabelNames.split(",").length);
		String sql = "select * from post where postId in (select distinct post_postId from post_label where labelName in ( " + s + " )) limit " + tag + "," + 10;
		return this.selectAllByStringConditionTemplate(post, sql);
	}


	@Override
	public List<Post> selectPostsByCombineCondition(final Post post, int page) {
		int tag = (page-1)*10;
		DynamicSql dynamicSql = new DynamicSql();
		String s = dynamicSql.postDynamicSql(post);
		String sql = "select * from post " +  s + " limit " + tag + "," + 10;
		return this.selectByCombineConditionTempalate(new ParamsList<String>(){

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
			}}, sql, new RowMapper<Post>() {

			@Override
			public List<Post> mapRow(ResultSet rs) throws Exception {
				List<Post> list = new ArrayList<Post>();
				while(rs.next()) {
					Post post = new Post();
					post.setPostId(rs.getInt("postId"));
					post.setPositionName(rs.getString("positionName"));
					post.setCreateTime(rs.getString("createTime"));
					post.setPositionAdvantage(rs.getString("positionAdvantage"));
					post.setSalary(rs.getString("salary"));
					post.setPositionFirstType(rs.getString("positionFirstType"));
					post.setJobNature(rs.getString("jobNature"));
					post.setWorkYear(rs.getString("workYear"));
					post.setEducation(rs.getString("education"));
					post.setCity(rs.getString("city"));
					post.setCompanyName(rs.getString("companyName"));
					post.setPositionType(rs.getString("positionType"));
					post.setIndustryField(rs.getString("industryField"));
					post.setCompanyShortName(rs.getString("companyShortName"));
					post.setFinanceStage(rs.getString("financeStage"));
					post.setCompanySize(rs.getString("companySize"));
					post.setDescription(rs.getString("description"));
					post.setCompanyHomePage(rs.getString("companyHomePage"));
					post.setLinkDetail(rs.getString("linkDetail"));
					post.setCompanyLogo(rs.getString("companyLogo"));
					list.add(post);
				}
				return list;
			}
			
		});
	}
	
	@Override
	public List<Post> selectPostsByUserId(User user) {
		Post post = new Post();
		post.setKeyInt(user.getUserId());
		String sql = "select * from post where postId in (select post_postId from favorite where user_userId = ? )";
		return this.selectAllByIntConditionTemplate(post, sql);
	}
	
	@Override
	public List<Post> selectPostsByPostId(List<Integer> list) {
		List<Post> postList = new ArrayList<Post>();
		for(int i = 0; i < list.size(); i++) {
			Post post = new Post();
			post.setKeyInt(list.get(i));
			String sql = "select * from post where postId = ?";
			if(this.selectOneByIntConditionTemplate(post, sql) != null) {
				postList.add(this.selectOneByIntConditionTemplate(post, sql));
			} 
		}
		if(postList.size() > 0) {
			return postList;
		} else {
			return null;
		}
	}

	@Override
	public Post selectOneOperation(Post t, PreparedStatement ps) throws Exception {
		return null;
	}

	@Override
	public Post selectOneByStringConditionOperation(Post t, PreparedStatement ps) {
		return null;
	}
	
	@Override
	public Post selectOneByIntConditionOperation(Post t, PreparedStatement ps) throws Exception {
		ResultSet rs = null;
		ps.setInt(1, t.getKeyInt());
		rs = ps.executeQuery();
		while(rs.next()) {
			Post post = new Post();
			post.setPostId(rs.getInt("postId"));
			post.setPositionName(rs.getString("positionName"));
			post.setCreateTime(rs.getString("createTime"));
			post.setPositionAdvantage(rs.getString("positionAdvantage"));
			post.setSalary(rs.getString("salary"));
			post.setPositionFirstType(rs.getString("positionFirstType"));
			post.setJobNature(rs.getString("jobNature"));
			post.setWorkYear(rs.getString("workYear"));
			post.setEducation(rs.getString("education"));
			post.setCity(rs.getString("city"));
			post.setCompanyName(rs.getString("companyName"));
			post.setPositionType(rs.getString("positionType"));
			post.setIndustryField(rs.getString("industryField"));
			post.setCompanyShortName(rs.getString("companyShortName"));
			post.setFinanceStage(rs.getString("financeStage"));
			post.setCompanySize(rs.getString("companySize"));
			post.setDescription(rs.getString("description"));
			post.setCompanyHomePage(rs.getString("companyHomePage"));
			post.setLinkDetail(rs.getString("linkDetail"));
			post.setCompanyLogo(rs.getString("companyLogo"));
			return post;
		}
		return null;
	}

	@Override
	public List<Post> selectAllOperation(Post t, PreparedStatement ps) throws Exception {
		ResultSet rs = null;
		rs = ps.executeQuery();
		List<Post> list = new ArrayList<Post>();
		while(rs.next()) {
			Post post = new Post();
			post.setPostId(rs.getInt("postId"));
			post.setPositionName(rs.getString("positionName"));
			post.setCreateTime(rs.getString("createTime"));
			post.setPositionAdvantage(rs.getString("positionAdvantage"));
			post.setSalary(rs.getString("salary"));
			post.setPositionFirstType(rs.getString("positionFirstType"));
			post.setJobNature(rs.getString("jobNature"));
			post.setWorkYear(rs.getString("workYear"));
			post.setEducation(rs.getString("education"));
			post.setCity(rs.getString("city"));
			post.setCompanyName(rs.getString("companyName"));
			post.setPositionType(rs.getString("positionType"));
			post.setIndustryField(rs.getString("industryField"));
			post.setCompanyShortName(rs.getString("companyShortName"));
			post.setFinanceStage(rs.getString("financeStage"));
			post.setCompanySize(rs.getString("companySize"));
			post.setDescription(rs.getString("description"));
			post.setCompanyHomePage(rs.getString("companyHomePage"));
			post.setLinkDetail(rs.getString("linkDetail"));
			post.setCompanyLogo(rs.getString("companyLogo"));
			list.add(post);
		}
		return list;
	}
	
	@Override
	public List<Post> selectAllByStringConditionOperation(Post t, PreparedStatement ps) throws Exception {
		ResultSet rs = null;
		String postLabelNames = t.getKeyString();
		String[] stringArr = postLabelNames.split(",");
		for(int i = 0; i < stringArr.length; i++) {
			ps.setString(i + 1, stringArr[i]);
		}
		rs = ps.executeQuery();
		List<Post> list = new ArrayList<Post>();
		while(rs.next()) {
			Post post = new Post();
			post.setPostId(rs.getInt("postId"));
			post.setPositionName(rs.getString("positionName"));
			post.setCreateTime(rs.getString("createTime"));
			post.setPositionAdvantage(rs.getString("positionAdvantage"));
			post.setSalary(rs.getString("salary"));
			post.setPositionFirstType(rs.getString("positionFirstType"));
			post.setJobNature(rs.getString("jobNature"));
			post.setWorkYear(rs.getString("workYear"));
			post.setEducation(rs.getString("education"));
			post.setCity(rs.getString("city"));
			post.setCompanyName(rs.getString("companyName"));
			post.setPositionType(rs.getString("positionType"));
			post.setIndustryField(rs.getString("industryField"));
			post.setCompanyShortName(rs.getString("companyShortName"));
			post.setFinanceStage(rs.getString("financeStage"));
			post.setCompanySize(rs.getString("companySize"));
			post.setDescription(rs.getString("description"));
			post.setCompanyHomePage(rs.getString("companyHomePage"));
			post.setLinkDetail(rs.getString("linkDetail"));
			post.setCompanyLogo(rs.getString("companyLogo"));
			list.add(post);
		}
		return list;
	}

	@Override
	public List<Post> selectAllByIntConditionOperation(Post t, PreparedStatement ps) throws Exception {
		ResultSet rs = null;
		ps.setInt(1, t.getKeyInt());
		rs = ps.executeQuery();
		List<Post> list = new ArrayList<Post>();
		while(rs.next()) {
			Post post = new Post();
			post.setPostId(rs.getInt("postId"));
			post.setPositionName(rs.getString("positionName"));
			post.setCreateTime(rs.getString("createTime"));
			post.setPositionAdvantage(rs.getString("positionAdvantage"));
			post.setSalary(rs.getString("salary"));
			post.setPositionFirstType(rs.getString("positionFirstType"));
			post.setJobNature(rs.getString("jobNature"));
			post.setWorkYear(rs.getString("workYear"));
			post.setEducation(rs.getString("education"));
			post.setCity(rs.getString("city"));
			post.setCompanyName(rs.getString("companyName"));
			post.setPositionType(rs.getString("positionType"));
			post.setIndustryField(rs.getString("industryField"));
			post.setCompanyShortName(rs.getString("companyShortName"));
			post.setFinanceStage(rs.getString("financeStage"));
			post.setCompanySize(rs.getString("companySize"));
			post.setDescription(rs.getString("description"));
			post.setCompanyHomePage(rs.getString("companyHomePage"));
			post.setLinkDetail(rs.getString("linkDetail"));
			post.setCompanyLogo(rs.getString("companyLogo"));
			list.add(post);
		}
		return list;
	}

	@Override
	public boolean createOperation(Post t, PreparedStatement ps) throws Exception {
		ps.setInt(1, t.getPostId());
		ps.setString(2, t.getPositionName());
		ps.setString(3, t.getCreateTime());
		ps.setString(4, t.getPositionAdvantage());
		ps.setString(5, t.getSalary());
		ps.setString(6, t.getPositionFirstType());
		ps.setString(7, t.getJobNature());
		ps.setString(8, t.getWorkYear());
		ps.setString(9, t.getEducation());
		ps.setString(10, t.getCity());
		ps.setString(11, t.getCompanyName());
		ps.setString(12, t.getIndustryField());
		ps.setString(13, t.getCompanyShortName());
		ps.setString(14, t.getFinanceStage());
		ps.setString(15, t.getCompanySize());
		ps.setString(16, t.getDescription());
		ps.setString(17, t.getCompanyHomePage());
		ps.setString(18, t.getPositionName());
		ps.setString(19, t.getPositionName());
		ps.setString(20, t.getLinkDetail());
		int i  = ps.executeUpdate();
		if(i == 0) {
			return false;
		} else {
			return true;
		}
	}

	@Override
	public boolean deleteOperation(Post t, PreparedStatement ps) throws Exception {
		ps.setInt(1, t.getPostId());
		int i  = ps.executeUpdate();
		if(i == 0) {
			return false;
		} else {
			return true;
		}
	}

	@Override
	public boolean updateOperation(Post t, PreparedStatement ps) throws Exception {
		return false;
	}

}
