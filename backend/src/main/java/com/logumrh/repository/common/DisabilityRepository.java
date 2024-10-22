package com.logumrh.repository.common;

import com.logumrh.model.common.Disability;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DisabilityRepository extends JpaRepository<Disability, Long> {
}
