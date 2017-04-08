package cn.edu.cqupt.ok.jdbc;

import java.sql.Connection;

import javax.sql.DataSource;

public interface JDBCHelper {
	public Connection getConnection();
	public DataSource getDataSource();
}
