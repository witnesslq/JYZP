package cn.edu.cqupt.ok.service;

import cn.edu.cqupt.ok.exception.SearchRecordException;
import cn.edu.cqupt.ok.po.SearchRecord;

public interface SearchRecordService {
	public boolean addSearchRecord(SearchRecord searchRecord) throws SearchRecordException;
}
