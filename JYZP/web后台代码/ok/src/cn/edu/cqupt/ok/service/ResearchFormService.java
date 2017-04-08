package cn.edu.cqupt.ok.service;

import java.util.List;

import cn.edu.cqupt.ok.exception.ResearchFormException;
import cn.edu.cqupt.ok.po.ResearchForm;
import cn.edu.cqupt.ok.po.User;

public interface ResearchFormService {
	public List<ResearchForm> showReserchFormByUserId(User user) throws ResearchFormException;
	public boolean addResearchForm(ResearchForm researchForm) throws ResearchFormException;
	public boolean modifyResearchForm(ResearchForm researchForm) throws ResearchFormException;
}
