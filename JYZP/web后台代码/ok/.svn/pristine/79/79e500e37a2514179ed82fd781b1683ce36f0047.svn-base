package cn.edu.cqupt.ok.service.impl;

import java.util.List;

import cn.edu.cqupt.ok.dao.ResearchFormDao;
import cn.edu.cqupt.ok.dao.impl.ResearchFormDaoImpl;
import cn.edu.cqupt.ok.exception.ResearchFormException;
import cn.edu.cqupt.ok.po.ResearchForm;
import cn.edu.cqupt.ok.po.User;
import cn.edu.cqupt.ok.service.ResearchFormService;

public class ResearchFormServiceImpl implements ResearchFormService {

	ResearchFormDao researchFormDao = new ResearchFormDaoImpl();
	
	@Override
	public List<ResearchForm> showReserchFormByUserId(User user) throws ResearchFormException {
		try {
			return researchFormDao.selectResearchFormByUserId(user);
		} catch (Exception e) {
			throw new ResearchFormException("查询失败");
		}
	}

	@Override
	public boolean addResearchForm(ResearchForm researchForm) throws ResearchFormException {
		try {
			return researchFormDao.insertResearchForm(researchForm);
		} catch (Exception e) {
			throw new ResearchFormException("添加失败");
		}
	}

	@Override
	public boolean modifyResearchForm(ResearchForm researchForm) throws ResearchFormException {
		try {
			return researchFormDao.updateResearchForm(researchForm);
		} catch (Exception e) {
			throw new ResearchFormException("更新失败");
		}
	}

}
