
from dataclasses import dataclass, field
from typing import List, Optional
from datetime import datetime

@dataclass
class AcademicProgram:
    id: Optional[str]
    name: str
    institution: str
    duration: str
    cost: float
    description: str
    tags: List[str] = field(default_factory=list)

@dataclass
class OrientationSession:
    id: str
    student_prompt: str
    analysis: str
    recommended_programs: List[AcademicProgram]
    created_at: datetime = field(default_factory=datetime.now)
