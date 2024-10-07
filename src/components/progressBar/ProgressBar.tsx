import styled from "styled-components";

export interface IProps {
  totalProgress: number;
  currentProgress: number;
  showProgress?: boolean;
}

const StyledSpan = styled.span<{
  $currentProgress: number;
  $totalProgress: number;
}>`
  ${({ $currentProgress, $totalProgress }) => `
    ${
      $currentProgress & $currentProgress
        ? `width: ${($currentProgress / $totalProgress) * 100}%;`
        : ""
    }
  `}
`;

const ProgressBar = ({
  totalProgress,
  currentProgress,
  showProgress = false,
}: IProps) => {
  return (
    <span className="progress-bar">
      <StyledSpan
        className="progress-bar__fill"
        $totalProgress={totalProgress}
        $currentProgress={currentProgress}
      >
        {showProgress && currentProgress}
      </StyledSpan>
    </span>
  );
};

export default ProgressBar;
