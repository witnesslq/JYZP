package cn.edu.cqupt.ok.jdbc;

import java.io.InputStream;

import java.sql.Connection;

import javax.sql.DataSource;

import java.util.Properties;
import org.apache.commons.dbcp2.BasicDataSourceFactory;

public final class JDBCHelperImpl implements JDBCHelper{
	private static DataSource dataSource = null;
	
	static {
		try {
			Properties prop = new Properties();
			InputStream is = JDBCHelperImpl.class.getClassLoader().getResourceAsStream("dbcpconfig.properties");
			prop.load(is);
			dataSource = BasicDataSourceFactory.createDataSource(prop);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	@Override
	public DataSource getDataSource() {
		return dataSource;
	}
	
	@Override
	public Connection getConnection() {
		try {
			
			Connection con = getDataSource().getConnection();
			return con;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
