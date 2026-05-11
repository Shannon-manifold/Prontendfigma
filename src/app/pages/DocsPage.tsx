import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronDown, BookOpen, Code2, Users, Zap, ExternalLink, Copy, Check } from 'lucide-react';

type DocId = keyof typeof DOC_CONTENT;

const NAV = [
  {
    group: '시작하기',
    icon: Zap,
    items: [
      { id: 'intro', label: '소개' },
      { id: 'first-proof', label: '첫 번째 증명' },
      { id: 'how-it-works', label: '플랫폼 이해하기' },
    ],
  },
  {
    group: '증명 작성',
    icon: Code2,
    items: [
      { id: 'lean4', label: 'Lean 4 가이드' },
      { id: 'coq', label: 'Coq 가이드' },
      { id: 'isabelle', label: 'Isabelle 가이드' },
      { id: 'agda', label: 'Agda 가이드' },
    ],
  },
  {
    group: '커뮤니티',
    icon: Users,
    items: [
      { id: 'contributing', label: '기여 가이드' },
      { id: 'verification', label: '검증 프로세스' },
      { id: 'code-of-conduct', label: '행동 강령' },
    ],
  },
  {
    group: 'API 레퍼런스',
    icon: BookOpen,
    items: [
      { id: 'api-overview', label: 'API 개요' },
      { id: 'api-proofs', label: '증명 엔드포인트' },
      { id: 'api-auth', label: '인증' },
    ],
  },
];

const DOC_CONTENT = {
  intro: {
    title: 'ShannonManifold 소개',
    toc: ['ShannonManifold란?', '핵심 기능', '지원 증명 보조기', '시작하기'],
    content: (
      <div className="space-y-8">
        <div>
          <h2 id="what" className="text-xl font-semibold text-gray-900 mb-3">ShannonManifold란?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            ShannonManifold는 증명 보조기(proof assistant)로 검증된 수학 정리와 증명을 공유하고 탐색하는 커뮤니티 플랫폼입니다.
            수학적 진리를 기계적으로 검증 가능한 형태로 표현하고, 커뮤니티가 함께 수학 지식을 쌓아나갑니다.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Shannon의 정보 이론이 불확실성을 수학적으로 다루듯, ShannonManifold는 수학적 진리의 불확실성을 형식 증명으로 해소합니다.
          </p>
        </div>

        <div>
          <h2 id="features" className="text-xl font-semibold text-gray-900 mb-3">핵심 기능</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: '기계 검증된 증명', desc: '모든 증명은 증명 보조기에 의해 자동으로 검증됩니다.' },
              { title: '다중 언어 지원', desc: 'Lean 4, Coq, Isabelle, Agda 등 주요 증명 보조기를 지원합니다.' },
              { title: '커뮤니티 리뷰', desc: '동료 검토를 통해 증명의 가독성과 품질을 높입니다.' },
              { title: '난제 후원', desc: '미해결 난제에 후원금을 모아 해결자에게 상금을 지급합니다.' },
            ].map((f) => (
              <div key={f.title} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="font-medium text-gray-900 mb-1 text-sm">{f.title}</div>
                <div className="text-sm text-gray-500">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 id="systems" className="text-xl font-semibold text-gray-900 mb-3">지원 증명 보조기</h2>
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-700">이름</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-700">기반 이론</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-700">주요 특징</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'Lean 4', theory: 'DTT (CIC 기반)', feature: 'mathlib4 생태계, 빠른 성장세' },
                  { name: 'Coq', theory: 'CIC', feature: '성숙한 생태계, 전술 증명' },
                  { name: 'Isabelle/HOL', theory: 'HOL', feature: '강력한 자동화, Isar 언어' },
                  { name: 'Agda', theory: 'MLTT', feature: '의존 타입, 함수형 스타일' },
                ].map((s, i) => (
                  <tr key={s.name} className={i % 2 === 1 ? 'bg-gray-50/50' : ''}>
                    <td className="px-4 py-3 font-mono font-medium text-indigo-700">{s.name}</td>
                    <td className="px-4 py-3 text-gray-600">{s.theory}</td>
                    <td className="px-4 py-3 text-gray-500">{s.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 id="start" className="text-xl font-semibold text-gray-900 mb-3">시작하기</h2>
          <ol className="space-y-3">
            {[
              '계정을 만들고 증명 보조기 언어를 선택합니다.',
              '튜토리얼을 통해 기본 증명 작성법을 익힙니다.',
              '검증된 증명을 커뮤니티에 제출합니다.',
              '다른 멤버의 증명을 리뷰하고 토론에 참여합니다.',
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-6 h-6 bg-indigo-600 text-white rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-gray-600 text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    ),
  },

  'first-proof': {
    title: '첫 번째 증명 작성하기',
    toc: ['환경 설정', 'Hello, Proof!', '증명 구조 이해', '제출하기'],
    content: (
      <div className="space-y-8">
        <div>
          <h2 id="setup" className="text-xl font-semibold text-gray-900 mb-3">환경 설정</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lean 4를 사용한 첫 번째 증명을 작성해봅니다. 먼저 로컬 환경을 설정하거나 웹 에디터를 사용할 수 있습니다.
          </p>
          <CodeBlock lang="bash" code={`# elan 설치 (Lean 버전 관리자)
curl https://raw.githubusercontent.com/leanprover/elan/master/elan-init.sh -sSf | sh

# Lean 4 설치
elan toolchain install leanprover/lean4:stable`} />
        </div>

        <div>
          <h2 id="hello" className="text-xl font-semibold text-gray-900 mb-3">Hello, Proof!</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            가장 간단한 증명인 반사성(reflexivity) 증명입니다.
          </p>
          <CodeBlock lang="lean" code={`-- 자연수 덧셈의 교환법칙 (간단한 경우)
theorem add_zero_right (n : Nat) : n + 0 = n := by
  rfl`} />
          <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
            ✓ Lean 4가 <code className="font-mono">rfl</code> 전술을 통해 이 증명을 자동으로 검증합니다.
          </div>
        </div>

        <div>
          <h2 id="structure" className="text-xl font-semibold text-gray-900 mb-3">증명 구조 이해</h2>
          <CodeBlock lang="lean" code={`-- 귀납법을 사용한 증명
theorem add_comm_zero (n : Nat) : 0 + n = n := by
  induction n with
  | zero => rfl
  | succ n ih =>
    simp [Nat.add_succ, ih]`} />
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><code className="font-mono text-indigo-700 bg-indigo-50 px-1 rounded">theorem</code><span>증명할 명제 선언</span></div>
            <div className="flex gap-2"><code className="font-mono text-indigo-700 bg-indigo-50 px-1 rounded">by</code><span>전술 모드 진입</span></div>
            <div className="flex gap-2"><code className="font-mono text-indigo-700 bg-indigo-50 px-1 rounded">induction</code><span>귀납법 적용</span></div>
            <div className="flex gap-2"><code className="font-mono text-indigo-700 bg-indigo-50 px-1 rounded">simp</code><span>단순화 전술</span></div>
          </div>
        </div>
      </div>
    ),
  },

  'how-it-works': {
    title: '플랫폼 이해하기',
    toc: ['증명 제출 흐름', '검증 단계', '상태 표시'],
    content: (
      <div className="space-y-8">
        <div>
          <h2 id="flow" className="text-xl font-semibold text-gray-900 mb-3">증명 제출 흐름</h2>
          <div className="space-y-2">
            {[
              { step: '작성', desc: '로컬 또는 웹 에디터에서 증명을 작성합니다.' },
              { step: '기계 검증', desc: '증명 보조기가 논리적 완전성을 자동으로 검증합니다.' },
              { step: '제출', desc: '검증 파일(.lean, .v, .thy 등)을 플랫폼에 업로드합니다.' },
              { step: '커뮤니티 리뷰', desc: '다른 멤버들이 증명의 가독성과 품질을 검토합니다.' },
              { step: '승인', desc: '리뷰를 통과한 증명이 공개 저장소에 등록됩니다.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  {i < 4 && <div className="w-px h-6 bg-gray-200 mt-1" />}
                </div>
                <div className="pb-2">
                  <div className="font-medium text-gray-900 text-sm">{item.step}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 id="states" className="text-xl font-semibold text-gray-900 mb-3">상태 표시</h2>
          <div className="space-y-2 text-sm">
            {[
              { label: '검증됨', color: 'bg-green-50 text-green-700 border-green-200', desc: '기계 검증과 커뮤니티 리뷰를 모두 통과한 증명' },
              { label: '검증 중', color: 'bg-yellow-50 text-yellow-700 border-yellow-200', desc: '제출 후 리뷰 진행 중인 증명' },
              { label: '검증 실패', color: 'bg-red-50 text-red-700 border-red-200', desc: '오류가 발견되어 수정이 필요한 증명' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded border text-xs font-medium flex-shrink-0 ${s.color}`}>{s.label}</span>
                <span className="text-gray-500">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  lean4: {
    title: 'Lean 4 가이드',
    toc: ['설치', '기본 문법', '전술 증명', 'mathlib4'],
    content: (
      <div className="space-y-8">
        <div>
          <h2 id="install" className="text-xl font-semibold text-gray-900 mb-3">설치</h2>
          <CodeBlock lang="bash" code={`curl https://raw.githubusercontent.com/leanprover/elan/master/elan-init.sh -sSf | sh
source ~/.profile
lean --version`} />
        </div>
        <div>
          <h2 id="syntax" className="text-xl font-semibold text-gray-900 mb-3">기본 문법</h2>
          <CodeBlock lang="lean" code={`-- 명제 정의
def myProposition : Prop := ∀ n : Nat, n + 0 = n

-- 정리 증명
theorem nat_add_zero : ∀ n : Nat, n + 0 = n := by
  intro n
  rfl

-- 타입 확인
#check Nat.add_comm
#eval 2 + 3`} />
        </div>
        <div>
          <h2 id="tactics" className="text-xl font-semibold text-gray-900 mb-3">자주 쓰는 전술</h2>
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-2.5 font-medium text-gray-700">전술</th>
                  <th className="text-left px-4 py-2.5 font-medium text-gray-700">설명</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['rfl', '반사성으로 목표 해결'],
                  ['intro h', '가설 h를 컨텍스트에 도입'],
                  ['apply f', '함수 f를 현재 목표에 적용'],
                  ['simp', '단순화 규칙 자동 적용'],
                  ['omega', '선형 산술 자동 해결'],
                  ['ring', '환 등식 자동 해결'],
                  ['linarith', '선형 부등식 해결'],
                ].map(([tactic, desc]) => (
                  <tr key={tactic}>
                    <td className="px-4 py-2.5 font-mono text-indigo-700">{tactic}</td>
                    <td className="px-4 py-2.5 text-gray-600">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 id="mathlib" className="text-xl font-semibold text-gray-900 mb-3">mathlib4 사용하기</h2>
          <CodeBlock lang="lean" code={`-- lakefile.lean에 추가
require mathlib from git
  "https://github.com/leanprover-community/mathlib4"

-- 파일에서 import
import Mathlib.Algebra.BigOperators.Basic
import Mathlib.Analysis.SpecialFunctions.Trigonometric.Basic`} />
        </div>
      </div>
    ),
  },

  coq: {
    title: 'Coq 가이드',
    toc: ['설치', '기본 문법', '전술 증명'],
    content: (
      <div className="space-y-8">
        <div>
          <h2 id="install" className="text-xl font-semibold text-gray-900 mb-3">설치</h2>
          <CodeBlock lang="bash" code={`# opam으로 설치
opam install coq

# 또는 패키지 매니저로
brew install coq       # macOS
apt install coq        # Ubuntu`} />
        </div>
        <div>
          <h2 id="syntax" className="text-xl font-semibold text-gray-900 mb-3">기본 문법</h2>
          <CodeBlock lang="coq" code={`(* 정리 선언 및 증명 *)
Theorem add_comm : forall n m : nat, n + m = m + n.
Proof.
  intros n m.
  induction n as [| n' IHn'].
  - simpl. rewrite <- plus_n_O. reflexivity.
  - simpl. rewrite -> IHn'. rewrite <- plus_n_Sm. reflexivity.
Qed.`} />
        </div>
      </div>
    ),
  },

  isabelle: {
    title: 'Isabelle 가이드',
    toc: ['설치', 'Isar 증명 언어'],
    content: (
      <div className="space-y-8">
        <div>
          <h2 id="install" className="text-xl font-semibold text-gray-900 mb-3">설치</h2>
          <p className="text-gray-600 mb-4">
            <a href="https://isabelle.in.tum.de" className="text-indigo-600 hover:underline inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
              isabelle.in.tum.de <ExternalLink className="w-3 h-3" />
            </a>
            에서 플랫폼별 설치 파일을 다운로드합니다.
          </p>
        </div>
        <div>
          <h2 id="isar" className="text-xl font-semibold text-gray-900 mb-3">Isar 증명 언어</h2>
          <CodeBlock lang="isabelle" code={`theory MyProof
  imports Main
begin

theorem add_commute:
  fixes n m :: nat
  shows "n + m = m + n"
proof (induct n)
  case 0
  then show ?case by simp
next
  case (Suc n)
  then show ?case by simp
qed

end`} />
        </div>
      </div>
    ),
  },

  agda: {
    title: 'Agda 가이드',
    toc: ['설치', '의존 타입'],
    content: (
      <div className="space-y-8">
        <div>
          <h2 id="install" className="text-xl font-semibold text-gray-900 mb-3">설치</h2>
          <CodeBlock lang="bash" code={`cabal install Agda
# 표준 라이브러리
git clone https://github.com/agda/agda-stdlib`} />
        </div>
        <div>
          <h2 id="dependent" className="text-xl font-semibold text-gray-900 mb-3">의존 타입 증명</h2>
          <CodeBlock lang="agda" code={`module MyProof where

open import Data.Nat
open import Relation.Binary.PropositionalEquality

+-comm : ∀ (m n : ℕ) → m + n ≡ n + m
+-comm zero    n = sym (+-identityʳ n)
+-comm (suc m) n = trans (cong suc (+-comm m n)) (sym (+-suc n m))`} />
        </div>
      </div>
    ),
  },

  contributing: {
    title: '기여 가이드',
    toc: ['기여 방법', '증명 스타일 가이드', 'PR 체크리스트'],
    content: (
      <div className="space-y-8">
        <div>
          <h2 id="how" className="text-xl font-semibold text-gray-900 mb-3">기여 방법</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <p>ShannonManifold는 다음 방식으로 기여할 수 있습니다:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>새로운 증명 제출</li>
              <li>기존 증명의 오류 수정 또는 개선</li>
              <li>튜토리얼 및 학습 자료 작성</li>
              <li>Q&A에서 질문에 답변</li>
              <li>난제 후원 및 해결 시도</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 id="style" className="text-xl font-semibold text-gray-900 mb-3">증명 스타일 가이드</h2>
          <div className="space-y-3">
            {[
              { rule: '명확한 이름', desc: '정리와 보조 정리의 이름은 수학적 의미를 명확히 전달해야 합니다.' },
              { rule: '주석 작성', desc: '핵심 아이디어나 비자명한 단계에 주석을 달아주세요.' },
              { rule: '최소 가정', desc: '불필요한 가정을 줄이고 가장 일반적인 형태로 증명하세요.' },
              { rule: '단계 분리', desc: '복잡한 증명은 보조 정리로 나누어 가독성을 높이세요.' },
            ].map((item) => (
              <div key={item.rule} className="flex gap-3 text-sm">
                <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">{item.rule}: </span>
                  <span className="text-gray-600">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 id="checklist" className="text-xl font-semibold text-gray-900 mb-3">PR 체크리스트</h2>
          <div className="space-y-2 text-sm">
            {[
              '증명 보조기에서 오류 없이 검증됨',
              '정리 이름이 명명 규칙을 따름',
              '관련 설명 및 주석 포함',
              '불필요한 import 없음',
              '기존 증명과 중복되지 않음',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-600">
                <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-gray-400" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  verification: {
    title: '검증 프로세스',
    toc: ['자동 검증', '커뮤니티 리뷰', '검증 기준'],
    content: (
      <div className="space-y-8">
        <div>
          <h2 id="auto" className="text-xl font-semibold text-gray-900 mb-3">자동 검증</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            제출된 모든 증명은 CI 파이프라인에서 해당 증명 보조기가 실행되어 논리적 완전성이 자동으로 검사됩니다.
            오류가 없을 때만 다음 단계로 진행됩니다.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-700 space-y-1">
            <div><span className="text-green-600">✓</span> lean --make MyProof.lean</div>
            <div><span className="text-green-600">✓</span> 0 errors, 0 warnings</div>
            <div><span className="text-green-600">✓</span> 자동 검증 통과</div>
          </div>
        </div>
        <div>
          <h2 id="review" className="text-xl font-semibold text-gray-900 mb-3">커뮤니티 리뷰</h2>
          <p className="text-gray-600 leading-relaxed">
            자동 검증 이후 최소 2명의 커뮤니티 멤버가 증명을 검토합니다.
            가독성, 스타일, 수학적 의의를 평가합니다. 검토자는 승인 또는 수정 요청을 남길 수 있습니다.
          </p>
        </div>
      </div>
    ),
  },

  'code-of-conduct': {
    title: '행동 강령',
    toc: ['기본 원칙', '금지 행위', '신고 방법'],
    content: (
      <div className="space-y-8">
        <div>
          <h2 id="principles" className="text-xl font-semibold text-gray-900 mb-3">기본 원칙</h2>
          <div className="space-y-3 text-sm text-gray-600">
            {[
              '수학적 진실을 존중하고 정직하게 기여합니다.',
              '다른 멤버의 의견과 기여를 존중합니다.',
              '건설적인 피드백을 제공하고 비판은 사람이 아닌 내용에 집중합니다.',
              '초보자를 환영하고 배움의 과정을 응원합니다.',
            ].map((p, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-indigo-500 font-bold">·</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 id="prohibited" className="text-xl font-semibold text-gray-900 mb-3">금지 행위</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700 space-y-1">
            {['타인에 대한 비하 또는 차별', '검증되지 않은 증명의 고의 제출', '저작권 침해 콘텐츠 게시', '스팸 또는 광고성 게시물'].map((p) => (
              <div key={p} className="flex gap-2"><span>✕</span><span>{p}</span></div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  'api-overview': {
    title: 'API 개요',
    toc: ['기본 URL', '인증', '응답 형식'],
    content: (
      <div className="space-y-8">
        <div>
          <h2 id="base" className="text-xl font-semibold text-gray-900 mb-3">기본 URL</h2>
          <CodeBlock lang="bash" code={`https://api.shannonmanifold.io/v1`} />
        </div>
        <div>
          <h2 id="auth" className="text-xl font-semibold text-gray-900 mb-3">인증</h2>
          <CodeBlock lang="bash" code={`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     https://api.shannonmanifold.io/v1/proofs`} />
        </div>
        <div>
          <h2 id="response" className="text-xl font-semibold text-gray-900 mb-3">응답 형식</h2>
          <CodeBlock lang="json" code={`{
  "data": [...],
  "meta": {
    "total": 1247,
    "page": 1,
    "per_page": 20
  }
}`} />
        </div>
      </div>
    ),
  },

  'api-proofs': {
    title: '증명 엔드포인트',
    toc: ['목록 조회', '단건 조회', '제출'],
    content: (
      <div className="space-y-8">
        <div>
          <h2 id="list" className="text-xl font-semibold text-gray-900 mb-3">목록 조회</h2>
          <CodeBlock lang="bash" code={`GET /v1/proofs
GET /v1/proofs?status=verified&language=lean4&page=1`} />
        </div>
        <div>
          <h2 id="single" className="text-xl font-semibold text-gray-900 mb-3">단건 조회</h2>
          <CodeBlock lang="bash" code={`GET /v1/proofs/:id`} />
          <CodeBlock lang="json" code={`{
  "id": "prf_abc123",
  "title": "페르마의 마지막 정리 (n=3)",
  "status": "verified",
  "language": "lean4",
  "prover": "김수학",
  "created_at": "2026-04-28T10:00:00Z"
}`} />
        </div>
        <div>
          <h2 id="submit" className="text-xl font-semibold text-gray-900 mb-3">제출</h2>
          <CodeBlock lang="bash" code={`POST /v1/proofs
Content-Type: application/json

{
  "title": "새 정리 제목",
  "language": "lean4",
  "content": "theorem my_theorem ..."
}`} />
        </div>
      </div>
    ),
  },

  'api-auth': {
    title: '인증',
    toc: ['API 키 발급', '토큰 갱신'],
    content: (
      <div className="space-y-8">
        <div>
          <h2 id="key" className="text-xl font-semibold text-gray-900 mb-3">API 키 발급</h2>
          <p className="text-gray-600 mb-4">설정 → 개발자 탭에서 API 키를 발급받을 수 있습니다.</p>
          <CodeBlock lang="bash" code={`POST /v1/auth/token
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "your_password"
}`} />
        </div>
        <div>
          <h2 id="refresh" className="text-xl font-semibold text-gray-900 mb-3">토큰 갱신</h2>
          <CodeBlock lang="bash" code={`POST /v1/auth/refresh
Authorization: Bearer YOUR_REFRESH_TOKEN`} />
        </div>
      </div>
    ),
  },
} as const;

function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden border border-gray-200">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-700">
        <span className="text-xs text-gray-400 font-mono">{lang}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? '복사됨' : '복사'}
        </button>
      </div>
      <pre className="bg-gray-950 text-gray-100 px-4 py-4 text-sm font-mono overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function DocsPage() {
  const [activeId, setActiveId] = useState<DocId>('intro');
  const [openGroups, setOpenGroups] = useState<string[]>(['시작하기', '증명 작성', '커뮤니티', 'API 레퍼런스']);

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) =>
      prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
    );
  };

  const doc = DOC_CONTENT[activeId];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-0 min-h-screen">
          {/* Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0 border-r border-gray-200 py-8 pr-6">
            <div className="sticky top-20 space-y-1">
              {NAV.map((section) => {
                const Icon = section.icon;
                const isOpen = openGroups.includes(section.group);
                return (
                  <div key={section.group}>
                    <button
                      onClick={() => toggleGroup(section.group)}
                      className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide hover:text-gray-900 transition-colors"
                    >
                      <div className="flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5" />
                        {section.group}
                      </div>
                      <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? '' : '-rotate-90'}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-2 border-l border-gray-200 pl-3 py-1 space-y-0.5">
                            {section.items.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => setActiveId(item.id as DocId)}
                                className={`w-full text-left px-2 py-1.5 text-sm rounded transition-colors ${
                                  activeId === item.id
                                    ? 'bg-indigo-50 text-indigo-700 font-medium'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 py-8 px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                  {doc.title}
                </h1>
                {doc.content}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* TOC */}
          <aside className="hidden lg:block w-44 flex-shrink-0 py-8 pl-6">
            <div className="sticky top-20">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">이 페이지</p>
              <AnimatePresence mode="wait">
                <motion.nav
                  key={activeId}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1"
                >
                  {doc.toc.map((item) => (
                    <div
                      key={item}
                      className="text-sm text-gray-500 hover:text-indigo-600 transition-colors cursor-pointer py-0.5 leading-snug"
                    >
                      {item}
                    </div>
                  ))}
                </motion.nav>
              </AnimatePresence>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
