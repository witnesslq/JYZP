package cn.edu.cqupt.ok.service.impl;

import cn.edu.cqupt.ok.dao.SearchRecordDao;
import cn.edu.cqupt.ok.dao.impl.SearchRecordDaoImpl;
import cn.edu.cqupt.ok.exception.SearchRecordException;
import cn.edu.cqupt.ok.po.SearchRecord;
import cn.edu.cqupt.ok.service.SearchRecordService;

public class SearchRecordServiceImpl implements SearchRecordService{

	SearchRecordDao searchRecordDao = new SearchRecordDaoImpl();
	
	@Override
	public boolean addSearchRecord(SearchRecord searchRecord) throws SearchRecordException {
		try {
			return searchRecordDao.insertSearchRecord(searchRecord);
		} catch (Exception e) {
			throw new SearchRecordException("添加失败");
		}
	}

}
