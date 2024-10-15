package com.logumrh.repository;

import com.logumrh.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Integer> {
}
