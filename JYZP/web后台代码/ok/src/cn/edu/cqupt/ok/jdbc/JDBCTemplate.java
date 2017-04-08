package cn.edu.cqupt.ok.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

public abstract class JDBCTemplate <T> {

	public T selectOneTemplate(T t, String sql) {
		Connection con = null;
		PreparedStatement ps = null;
		JDBCHelper help = new JDBCHelperImpl();
		try {
			con = help.getConnection();
			ps = con.prepareStatement(sql);
			return this.selectOneOperation(t, ps);
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {
			try {
				if(ps != null) ps.close();
				if(con != null) con.close();
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}
	
	public T selectOneByStringConditionTemplate(T t, String sql) {
	    Connection con = null;
		PreparedStatement ps = null;
		JDBCHelper help = new JDBCHelperImpl();
		try {
			con = help.getConnection();
			ps = con.prepareStatement(sql);
			return this.selectOneByStringConditionOperation(t, ps);
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {
			try {
				if(ps != null) ps.close();
				if(con != null) con.close();
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}
	
	public T selectOneByIntConditionTemplate(T t, String sql) {
	    Connection con = null;
		PreparedStatement ps = null;
		JDBCHelper help = new JDBCHelperImpl();
		try {
			con = help.getConnection();
			ps = con.prepareStatement(sql);
			return this.selectOneByIntConditionOperation(t, ps);
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {
			try {
				if(ps != null) ps.close();
				if(con != null) con.close();
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}
	
	public T selectOneByCombineConditionTemplate(ParamsList<String> paramsList, String sql, RowMapperOne<T> rowMapperOne) {
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		JDBCHelper help = new JDBCHelperImpl();
		try {
			con = help.getConnection();
			ps = con.prepareStatement(sql);
			for(int i = 0; i < paramsList.params().size(); i++) {
				ps.setString(i + 1, paramsList.params().get(i));
			}
			rs = ps.executeQuery();
			if(rs.next()) {
				return rowMapperOne.mapRowOne(rs);
			} else {
				System.out.println(2);
				throw new RuntimeException("查询失败");
			}
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {
			try {
				if(rs != null) rs.close();
				if(ps != null) ps.close();
				if(con != null) con.close();
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}
	
	public List<T> selectAllTemplate(T t, String sql) {
	    Connection con = null;
		PreparedStatement ps = null;
		JDBCHelper help = new JDBCHelperImpl();
		try {
			con = help.getConnection();
			ps = con.prepareStatement(sql);
			return this.selectAllOperation(t, ps);
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {
			try {
				if(ps != null) ps.close();
				if(con != null) con.close();
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}
	
	public List<T> selectAllByStringConditionTemplate(T t, String sql) {
	    Connection con = null;
		PreparedStatement ps = null;
		JDBCHelper help = new JDBCHelperImpl();
		try {
			con = help.getConnection();
			ps =con.prepareStatement(sql);
			return this.selectAllByStringConditionOperation(t, ps);
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {
			try {
				if(ps != null) ps.close();
				if(con != null) con.close();
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}
	
	public List<T> selectAllByIntConditionTemplate(T t, String sql) {
	    Connection con = null;
		PreparedStatement ps = null;
		JDBCHelper help = new JDBCHelperImpl();
		try {
			con = help.getConnection();
			ps =con.prepareStatement(sql);
			return this.selectAllByIntConditionOperation(t, ps);
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {
			try {
				if(ps != null) ps.close();
				if(con != null) con.close();
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}
	
	public List<T> selectByCombineConditionTempalate(ParamsList<String> paramsList, String sql, RowMapper<T> rowMapper) {
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		JDBCHelper help = new JDBCHelperImpl();
		try {
			con = help.getConnection();
			ps = con.prepareStatement(sql);
			for(int i = 0; i < paramsList.params().size(); i++) ps.setObject(i + 1, paramsList.params().get(i));
			rs = ps.executeQuery();
			if(rs.next()) {
				return rowMapper.mapRow(ps.executeQuery());
			} else {
				throw new Exception("找不到相关岗位");
			}
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {
			try {
				if(rs != null) rs.close();
				if(ps != null) ps.close();
				if(con != null) con.close();
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}
	
	public boolean createTemplate(T t, String sql) {
	    Connection con = null;
		PreparedStatement ps = null;
		JDBCHelper help = new JDBCHelperImpl();
		try {
			con = help.getConnection();
			ps = con.prepareStatement(sql);
			return this.createOperation(t, ps);
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {
			try {
				if(ps != null) ps.close();
				if(con != null) con.close();
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}
	
	public boolean deleteTemplate(T t, String sql) {
	    Connection con = null;
		PreparedStatement ps = null;
		JDBCHelper help = new JDBCHelperImpl();
		try {
			con = help.getConnection();
			ps = con.prepareStatement(sql);
			return this.deleteOperation(t, ps);
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {
			try {
				if(ps != null) ps.close();
				if(con != null) con.close();
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}
	
	public boolean updateTemplate(T t, String sql) {
	    Connection con = null;
		PreparedStatement ps = null;
		JDBCHelper help = new JDBCHelperImpl();
		try {
			con = help.getConnection();
			ps = con.prepareStatement(sql);
			return this.updateOperation(t, ps);
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {
			try {
				if(ps != null) ps.close();
				if(con != null) con.close();
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}

	public abstract T selectOneOperation(T t, PreparedStatement ps) throws Exception;
	
	public abstract T selectOneByStringConditionOperation(T t, PreparedStatement ps) throws Exception;
	
	public abstract T selectOneByIntConditionOperation(T t, PreparedStatement ps) throws Exception;
	
	public abstract List<T> selectAllOperation(T t, PreparedStatement ps) throws Exception;
	
	public abstract List<T> selectAllByStringConditionOperation(T t, PreparedStatement ps) throws Exception;
	
	public abstract List<T> selectAllByIntConditionOperation(T t, PreparedStatement ps) throws Exception;
	
	public abstract boolean createOperation(T t, PreparedStatement ps) throws Exception;
	
	public abstract boolean deleteOperation(T t, PreparedStatement ps) throws Exception;
	
	public abstract boolean updateOperation(T t, PreparedStatement ps) throws Exception;
	
}