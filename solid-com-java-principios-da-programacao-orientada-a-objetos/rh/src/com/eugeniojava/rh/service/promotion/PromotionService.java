package com.eugeniojava.rh.service.promotion;

import com.eugeniojava.rh.ValidationException;
import com.eugeniojava.rh.model.Employee;
import com.eugeniojava.rh.model.Role;

public class PromotionService {

    public void promote(Employee employee, Boolean goalReached) {
        Role currentRole = employee.getRole();
        if (Role.MANAGER == currentRole) {
            throw new ValidationException("Managers cannot be promoted");
        }
        if (goalReached) {
            Role newRole = currentRole.getNextRole();
            employee.promote(newRole);
        } else {
            throw new ValidationException("Employee did not reach his goal");
        }
    }
}
