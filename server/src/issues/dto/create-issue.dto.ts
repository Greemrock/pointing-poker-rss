export class CreateIssueDto {
  readonly title: string;
  readonly link: string;
  readonly priority: string;
  readonly isDone: boolean;
  readonly roomId: string;
  readonly overall: number[];
}

export class UpdateIssueDto {
  id: string;
  title: string;
  link: string;
  priority: string;
  isDone: boolean;
  roomId: string;
  overall: number[];
}
