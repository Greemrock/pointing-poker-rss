export class CreateIssueDto {
  readonly title: string;
  readonly link: string;
  readonly priority: string;
  readonly isDone: boolean;
  readonly roomId: string;
}

export class UpdateIssueDto {
  readonly id: string;
  readonly title: string;
  readonly link: string;
  readonly priority: string;
  readonly isDone: boolean;
  readonly roomId: string;
}
