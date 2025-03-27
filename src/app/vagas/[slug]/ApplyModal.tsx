"use client";

import { useState } from "react";
import Button from "@/components/common/Button/Button";
import Modal from "@/components/common/Modal/Modal";

interface ApplyModalProps {
  jobId: string;
  jobTitle: string;
}

export default function ApplyModal({ jobId, jobTitle }: ApplyModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Candidatar-se
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        jobId={jobId}
        jobTitle={jobTitle}
      />
    </>
  );
}
