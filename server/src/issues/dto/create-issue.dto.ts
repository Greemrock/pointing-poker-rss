export class CreateIssueDto {
  readonly title: string;
  readonly link: string;
  readonly priority: string;
}

export class UpdateIssueDto {
  readonly link: string;
}
